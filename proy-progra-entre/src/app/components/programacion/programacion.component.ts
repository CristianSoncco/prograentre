import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Scheduling } from 'src/app/interfaces/scheduling.interface';
import { SchedulingService } from 'src/app/services/scheduling.service';

@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.component.html',
  styleUrls: ['./programacion.component.css']
})
export class ProgramacionComponent implements OnInit {
  selectedDate: NgbDateStruct | null = null;
  nombreProgramacion: string = "";
  userForm: FormGroup;
  scheduling:Scheduling[] = [];
  vehiculo:string = "";


  constructor(private calendar: NgbCalendar,
     private formBuilder: FormBuilder,
     private schedulingService: SchedulingService
     ) {

      this.userForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        date: new FormControl('', [Validators.required]),
        vehicle: new FormControl('', [Validators.required]),
        driver: new FormControl('', [Validators.required]),
        aux1: new FormControl('', [Validators.required]),
        aux2: new FormControl('', [Validators.required]),
        service: new FormControl('', [Validators.required]),
        firstPoint: new FormControl('', [Validators.required]),
        secondPoint: new FormControl('', [Validators.required]),
        menssage: new FormControl('', [Validators.required]),
        note: new FormControl('', [Validators.required]),
      })

     }



  ngOnInit(): void {

    this.schedulingService.getScheduling().subscribe(
      (scheduling) => {
        this.scheduling = scheduling;
      }
    )

  }

  onDateSelected(date: NgbDateStruct): void {
    this.selectedDate = date;
    console.log('Fecha seleccionada:', this.selectedDate);
  }
  nuevo: Scheduling = { name: '1', date:'29/08/2023',
  vehicle:'furgoneta', driver:'conductor1', aux1:'auxiliar1', aux2:'auxiliar2',
  service:'detalle', firstPoint:'primer punto', secondPoint:'segundo punto',
  menssage:'mensaje',note:'nota'
};
  addScheduling() {
    // Aquí puedes implementar la lógica para agregar la persona a una lista o enviarla a una API, por ejemplo
    console.log(this.nuevo);
    // Limpia el formulario después de agregar la persona
    this.nuevo = { name: '', date:'',
    vehicle:'', driver:'', aux1:'', aux2:'',
    service:'', firstPoint:'', secondPoint:'',
    menssage:'',note:'' };
  }

  async onSubmit() {
    if (this.userForm.valid) {
      console.log('Formulario válido', this.userForm.value);
      const response = await this.schedulingService.addScheduling(this.userForm.value);
      console.log(response);
    } else {
      console.log('Formulario inválido');
    }
  }
}
