import { Component } from '@angular/core';
import { PropietarioService } from 'src/app/servicios/propietario.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {



  propietario: any = {};

  vehiculo: any = {};

  vehiculos: any = [];

  vehiculoEditar: any = {}; 

  modalEditar: boolean = false;

  constructor(private propietarioService: PropietarioService) { }

  crearPropietario() {
    this.propietario.vehiculo = this.vehiculos;
    return this.propietarioService.create(this.propietario).subscribe(
      response => {

        console.log("se ha creado", response, this.propietario);
      }, error => {
        console.log("error" + error, this.propietario);
      }
    );
  }

  agregarVehiculo() {
    this.vehiculos.push({ ...this.vehiculo });
    this.vehiculo = {
      placa: '',
      vin: '',
      marca: '',
      linea:'',
      cilindrada:'',
      color:'',
      chasis:'',
      tipoDeVehiculo:'',
      modelo:''
    };
  }


  eliminarVehiculo(index: number) {
    
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este vehículo?');

    if (confirmacion) {
    
      this.vehiculos.splice(index, 1);
   
    }
  }

  editarVehiculo(vehiculo:any){
   this.vehiculoEditar = vehiculo
  }

  editarVehiculom(){
    const index = this.vehiculos.indexOf(this.vehiculoEditar);
    this.vehiculos[index] = this.vehiculoEditar;
   
  }
  
  
 

}
