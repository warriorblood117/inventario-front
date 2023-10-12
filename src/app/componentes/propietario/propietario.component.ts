import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Propietario, Vehiculo } from 'src/app/Interfaces/Propietario';
import { PropietarioService } from 'src/app/servicios/propietario.service';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.component.html',
  styleUrls: ['./propietario.component.css']
})
export class PropietarioComponent implements OnInit {

  propietarios : any = [];
  propietario = {} as Propietario;
  

  constructor (private propietarioService:PropietarioService){

  }

  ngOnInit(): void {
    this.propietarioService.getAll().subscribe(propietarios => {
      this.propietarios =  propietarios;
    });
  
  }

  detallesPropietario(id: number) {
    this.propietarioService.findById(id).pipe(take(1)).subscribe((propietario: any) => {
        this.propietario = propietario;
        if (this.propietario.vehiculo) {
            this.propietario.vehiculo = this.propietario.vehiculo.sort((a: any, b: any) => {
                return a.placa.localeCompare(b.placa);
            });
        }
    });
}

  

}
