// src/app/api/dashboard/route.ts
import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { getCurrentMonthRange } from '@/lib/utils';

export async function GET() {
  try {
    const user = await requireAuth();
    const { start, end } = getCurrentMonthRange();

    // Obtener saldo actual
    const saldo = await prisma.saldo.findUnique({
      where: { userId: user.id },
    });

    // Consumo del mes actual
    const consumosMes = await prisma.consumo.findMany({
      where: {
        userId: user.id,
        fecha: {
          gte: start,
          lte: end,
        },
      },
      orderBy: { fecha: 'asc' },
    });

    // Calcular estadísticas
    const totalConsumoKwh = consumosMes.reduce((sum, c) => sum + c.kwh, 0);
    const totalCosto = consumosMes.reduce((sum, c) => sum + c.costo, 0);
    const promedioDiario = consumosMes.length > 0 ? totalConsumoKwh / consumosMes.length : 0;

    // Últimas recargas 
    const ultimasRecargas = await prisma.recarga.findMany({
      where: { userId: user.id },
      orderBy: { fechaRecarga: 'desc' },
      take: 5,
    });

    // Datos para el gráfico (últimos 7 días)
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (6 - i));
      return date.toISOString().split('T')[0];
    });

    const consumoPorDia = last7Days.map(day => {
      const consumoDelDia = consumosMes.filter(c => 
        c.fecha.toISOString().split('T')[0] === day
      );
      const totalKwh = consumoDelDia.reduce((sum, c) => sum + c.kwh, 0);
      
      return {
        dia: new Date(day).toLocaleDateString('es-CO', { weekday: 'short' }),
        kwh: parseFloat(totalKwh.toFixed(2)),
      };
    });

    return NextResponse.json({
      saldo: saldo?.saldoActual || 0,
      estadisticas: {
        totalConsumoKwh: parseFloat(totalConsumoKwh.toFixed(2)),
        totalCosto,
        promedioDiario: parseFloat(promedioDiario.toFixed(2)),
        diasRegistrados: consumosMes.length,
      },
      consumoPorDia,
      ultimasRecargas: ultimasRecargas.map(r => ({
        id: r.id,
        monto: r.monto,
        estado: r.estado,
        fecha: r.fechaRecarga,
      })),
    });
  } catch (error: any) {
    console.error('Error en dashboard:', error);
    
    if (error.message === 'No autorizado') {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}