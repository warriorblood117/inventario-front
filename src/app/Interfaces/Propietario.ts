export interface Propietario {
  id: number;
  nombre?: string;
  apellido?: string;
  identificacion?: number;
  fechaNachimiento?: string;
  vehiculo: Vehiculo[];
}

export interface Vehiculo {
  id: number;
  placa: string;
  vin?: any;
  marca?: any;
  linea?: any;
  cilidrada?: any;
  color?: any;
  chasis?: any;
  tipoDeVehiculo?: any;
  modelo?: any;
}