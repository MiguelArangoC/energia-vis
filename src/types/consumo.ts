export interface ConsumoData {
  id: string;
  fecha: Date;
  kwh: number;
  costo: number;
}

export interface ConsumoDiario {
  dia: string;
  kwh: number;
}