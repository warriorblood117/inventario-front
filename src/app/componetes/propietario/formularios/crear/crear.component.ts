import { Component } from '@angular/core';
import { Propietario } from 'src/app/Interfaces/Propietario';
import { PropietarioService } from 'src/app/servicios/propietario.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {

  

  propietario: any = {};

  vehiculo: any = {};

  vehiculos:any = [];

  constructor(private propietarioService: PropietarioService) { }

  crearPropietario() { 
    this.propietario.vehiculo =  this.vehiculos;
    return this.propietarioService.create(this.propietario).subscribe(
      response => {

        console.log("se ha creado", response , this.propietario);
      }, error => {
        console.log("error" + error,this.propietario);
      }
    );
  }

  agregarVehiculo() {
    this.vehiculos.push({ ...this.vehiculo });
    this.vehiculo = {
      placa: '',
      vin: '',
      marca: '', 
    };
  }
  

}
