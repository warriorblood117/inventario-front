import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './componentes/propietario/formularios/crear/crear.component';
import { PropietarioComponent } from './componentes/propietario/propietario.component';
import { EditarComponent } from './componentes/propietario/formularios/editar/editar.component';

const routes: Routes = [
  { path: 'crear-propietario', component: CrearComponent },
  { path: 'editar-propietario/:id', component: EditarComponent},
  { path: 'home',component:PropietarioComponent},
  { path: '',redirectTo:'/home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
