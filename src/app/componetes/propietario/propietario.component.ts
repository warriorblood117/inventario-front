import { Component, OnInit } from '@angular/core';
import { PropietarioService } from 'src/app/servicios/propietario.service';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.component.html',
  styleUrls: ['./propietario.component.css']
})
export class PropietarioComponent implements OnInit {

  propietarios : any = [];

  constructor (private propietarioService:PropietarioService){

  }

  ngOnInit(): void {
    this.propietarioService.getAll().subscribe(propietarios => {
      this.propietarios =  propietarios;
    });
  }

  



}
