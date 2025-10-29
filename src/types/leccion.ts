export interface LeccionData {
  id: string;
  titulo: string;
  descripcion: string;
  contenido: string;
  puntos: number;
  duracionMin: number;
  categoria: string;
  completada?: boolean;
}