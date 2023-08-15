import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramacionComponent } from './components/programacion/programacion.component';
import { PersonalComponent } from './components/personal/personal.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { GenerarProgramacionComponent } from './components/generar-programacion/generar-programacion.component';
import { GestionProgramacionComponent } from './components/gestion-programacion/gestion-programacion.component';
import { InformesComponent } from './components/informes/informes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { ListPersonComponent } from './components/list-person/list-person.component';
import { AddDriverComponent } from './components/add-driver/add-driver.component';
import { ListDriverComponent } from './components/list-driver/list-driver.component';


const routes: Routes = [
  { path: 'programacion', component: ProgramacionComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'generar-programacion', component: GenerarProgramacionComponent },
  { path: 'gestion-programacion', component: GestionProgramacionComponent },
  { path: 'informes', component: InformesComponent },
  { path: 'personal/agregar-persona', component: AddPersonComponent },
  { path: 'personal/agregar-conductor', component: AddDriverComponent },
  { path: 'personal/listar-persona', component: ListPersonComponent },
  { path: 'personal/listar-conductor', component: ListDriverComponent },
  { path: '', redirectTo: '/programacion', pathMatch: 'full' }, // Página predeterminada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
