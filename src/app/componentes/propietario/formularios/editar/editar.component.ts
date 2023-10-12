import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropietarioService } from 'src/app/servicios/propietario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  propietarioId!: number;
  propietario: any = {};
  vehiculos: any = [];
  vehiculo: any = {};
  modalEditar: boolean = false;
  vehiculoEditar: any = {};

  constructor(private propietarioService: PropietarioService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.propietarioId = this.activeRoute.snapshot.params['id'];
    this.propietarioService.findById(this.propietarioId).subscribe(
      response => {
        this.propietario = response;
        this.vehiculos = response.vehiculo
        console.log(this.propietario)
      }
    );
  }

  findById(id: number) {
    return this.propietarioService.findById(id).subscribe(
      response => {
        this.propietario = response;

      }
    );
  }

  eliminarVehiculo(index: number) {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este vehículo?');

    if (confirmacion) {
      // Eliminar el vehículo de la lista local
      this.vehiculos.splice(index, 1);

      // Verificar si el vehículo tiene un ID definido
      if (index !== undefined) {
        // Llamar al servicio para eliminar el vehículo en el servidor
        this.propietarioService.delete(index).subscribe(
          response => {
            console.log(response);
          }
        );
      }
    }
  }



  editarPropietario() {
    this.propietario.vehiculo = this.vehiculos;
    return this.propietarioService.edit(this.propietarioId, this.propietario).subscribe(
      response => {
        console.log(response);
      }
    );
  }


  agregarVehiculo() {
    this.vehiculos.push({ ...this.vehiculo });
    this.vehiculo = {
      placa: '',
      vin: '',
      marca: '',
      linea: '',
      cilindrada: '',
      color: '',
      chasis: '',
      tipoDeVehiculo: '',
      modelo: ''
    };
  }

  editarVehiculo(vehiculo: any) {
    this.vehiculoEditar = vehiculo
  }

  editarVehiculom() {
    const index = this.vehiculos.indexOf(this.vehiculoEditar);
    this.vehiculos[index] = this.vehiculoEditar;

  }



}
