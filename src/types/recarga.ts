export interface RecargaData {
  id: string;
  monto: number;
  metodoPago: string;
  estado: 'PENDIENTE' | 'APROBADA' | 'RECHAZADA' | 'CANCELADA';
  fechaRecarga: Date;
}

export interface CreateRecargaInput {
  monto: number;
  metodoPago: string;
}