// src/lib/utils.ts

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utilidad para combinar clases de Tailwind CSS
 * Útil para componentes con clases condicionales
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formatea un número a pesos colombianos
 * @param amount - Cantidad en pesos
 * @returns String formateado ej: "$45.000"
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Formatea un número simple con separadores de miles
 * @param num - Número a formatear
 * @returns String formateado ej: "45.000"
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('es-CO').format(num);
}

/**
 * Calcula el costo de energía en pesos colombianos
 * @param kwh - Kilovatios hora consumidos
 * @param tarifaPorKwh - Tarifa por kWh (default: 750 pesos)
 * @returns Costo total en pesos
 */
export function calcularCostoEnergia(kwh: number, tarifaPorKwh: number = 750): number {
  return Math.round(kwh * tarifaPorKwh);
}

/**
 * Formatea una fecha a formato colombiano
 * @param date - Fecha a formatear
 * @param includeTime - Si incluye hora
 * @returns String formateado ej: "22 Oct 2025" o "22 Oct 2025, 3:45 PM"
 */
export function formatDate(date: Date | string, includeTime: boolean = false): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    ...(includeTime && {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }),
  };
  
  return new Intl.DateFormat('es-CO', options).format(dateObj);
}

/**
 * Valida un email
 * @param email - Email a validar
 * @returns true si es válido
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valida una contraseña (mínimo 8 caracteres)
 * @param password - Contraseña a validar
 * @returns true si es válida
 */
export function isValidPassword(password: string): boolean {
  return password.length >= 8;
}

/**
 * Valida un número de teléfono colombiano
 * @param phone - Teléfono a validar
 * @returns true si es válido (10 dígitos)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Obtiene el rango de fechas de la semana actual
 * @returns Objeto con fechas de inicio y fin
 */
export function getCurrentWeekRange(): { start: Date; end: Date } {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const start = new Date(now);
  start.setDate(now.getDate() - dayOfWeek);
  start.setHours(0, 0, 0, 0);
  
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  end.setHours(23, 59, 59, 999);
  
  return { start, end };
}

/**
 * Obtiene el rango de fechas del mes actual
 * @returns Objeto con fechas de inicio y fin
 */
export function getCurrentMonthRange(): { start: Date; end: Date } {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
  
  return { start, end };
}

/**
 * Calcula el nivel del usuario según sus puntos
 * @param puntos - Puntos acumulados
 * @returns Nivel del usuario
 */
export function calcularNivel(puntos: number): number {
  if (puntos < 100) return 1;
  if (puntos < 300) return 2;
  if (puntos < 600) return 3;
  if (puntos < 1000) return 4;
  return 5;
}

/**
 * Calcula puntos necesarios para el siguiente nivel
 * @param puntosActuales - Puntos actuales del usuario
 * @returns Puntos necesarios para subir de nivel
 */
export function puntosParaSiguienteNivel(puntosActuales: number): number {
  const nivel = calcularNivel(puntosActuales);
  const niveles = [0, 100, 300, 600, 1000, Infinity];
  return niveles[nivel] - puntosActuales;
}

/**
 * Genera un color según el consumo (bajo, medio, alto)
 * @param kwh - Consumo en kWh
 * @returns Color Tailwind
 */
export function getConsumoColor(kwh: number): string {
  if (kwh < 3) return 'text-green-600';
  if (kwh < 5) return 'text-yellow-600';
  return 'text-red-600';
}

/**
 * Trunca un texto largo
 * @param text - Texto a truncar
 * @param maxLength - Longitud máxima
 * @returns Texto truncado con "..."
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

/**
 * Genera un ID único simple
 * @returns String único
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

/**
 * Espera un tiempo determinado (para testing/delays)
 * @param ms - Milisegundos a esperar
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}