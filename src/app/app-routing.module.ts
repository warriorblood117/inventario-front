import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './componetes/propietario/formularios/crear/crear.component';

const routes: Routes = [
  { path: 'crear-usuario', component: CrearComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
