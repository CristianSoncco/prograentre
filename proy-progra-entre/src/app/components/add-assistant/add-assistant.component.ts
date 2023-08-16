import { Component, OnInit } from '@angular/core';
import { Assistant } from '../../interfaces/assistant.interface';
import { FormControl, FormGroup, Validators, FormBuilder  } from '@angular/forms';
import { AssistantService } from 'src/app/services/assistant.service';

@Component({
  selector: 'app-add-assistant',
  templateUrl: './add-assistant.component.html',
  styleUrls: ['./add-assistant.component.css']
})
export class AddAssistantComponent implements OnInit {
  formulario1: FormGroup;

  constructor(
    private assistantService: AssistantService
  ) {
    this.formulario1 = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      typePerson: new FormControl('', [Validators.required]),
    })
  }

ngOnInit(): void {

}
  nuevo: Assistant = { name: 'Nombre', lastName: 'Apellido', typePerson: 'Conductor' };

  agregarAuxiliar() {
    // Aquí puedes implementar la lógica para agregar la persona a una lista o enviarla a una API, por ejemplo
    console.log(this.nuevo);
    // Limpia el formulario después de agregar la persona
    this.nuevo = { name: '', lastName: '', typePerson: '' };
  }

  async onSubmit(){
    if (this.formulario1.valid) {
    console.log(this.formulario1.value);
    const response = await this.assistantService.addAssistant(this.formulario1.value);
    console.log(response);
  }
  }
}
