import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.component.html',
  styleUrls: ['./programacion.component.css']
})
export class ProgramacionComponent implements OnInit {
  selectedDate: NgbDateStruct | null = null;
  nombreProgramacion: string = "";
  userForm: FormGroup;
  vehiculo:string = "";


  constructor(private calendar: NgbCalendar,
     private formBuilder: FormBuilder) {

      this.userForm = new FormGroup({
        vechiulo: new FormControl('', [Validators.required])
      })

     }



  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      vehiculo: ['', Validators.required]
    });

  }

  onDateSelected(date: NgbDateStruct): void {
    this.selectedDate = date;
    console.log('Fecha seleccionada:', this.selectedDate);
  }
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Formulario válido', this.userForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
