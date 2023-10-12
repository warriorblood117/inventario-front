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

  constructor(private propietarioService: PropietarioService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.propietarioId = this.activeRoute.snapshot.params['id'];
    this.propietarioService.findById(this.propietarioId).subscribe(
      response => {
        this.propietario = response;
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

  editarPropietario() {

    return this.propietarioService.edit(this.propietarioId, this.propietario).subscribe(
      response => {
        console.log(response);
      }
    );
  }



}
