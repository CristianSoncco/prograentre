import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AgmCoreModule } from '@agm/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
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
import { CamelCasePipe } from 'src/app/pipes/camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProgramacionComponent,
    PersonalComponent,
    PedidosComponent,
    GenerarProgramacionComponent,
    GestionProgramacionComponent,
    InformesComponent,
    NavbarComponent,
    AddPersonComponent,
    AddDriverComponent,
    ListPersonComponent,
    ListDriverComponent,
    CamelCasePipe
  ],
  imports: [
    NgbModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBM-5Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3'
    // }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
