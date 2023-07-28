import { Component, OnInit } from '@angular/core';
import { Person } from '../../interfaces/person.interface';
import { FormControl, FormGroup, Validators, FormBuilder  } from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private personService: PersonService
  ) {
    this.formulario = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      typePerson: new FormControl('', [Validators.required]),
    })
  }

ngOnInit(): void {

}
  nuevoPersona: Person = { name: 'nombre', lastName: 'apellido', typePerson: 'conductor' };

  agregarPersona() {
    // Aquí puedes implementar la lógica para agregar la persona a una lista o enviarla a una API, por ejemplo
    console.log(this.nuevoPersona);
    // Limpia el formulario después de agregar la persona
    this.nuevoPersona = { name: '', lastName: '', typePerson: '' };
  }

  async onSubmit(){
    if (this.formulario.valid) {
    console.log(this.formulario.value);
    const response = await this.personService.addPerson(this.formulario.value);
    console.log(response);
  }
  }
}
