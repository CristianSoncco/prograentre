import { Component, OnInit } from '@angular/core';
import { Driver } from '../../interfaces/driver.interface';
import { FormControl, FormGroup, Validators, FormBuilder  } from '@angular/forms';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {
  formulario1: FormGroup;

  constructor(
    private driverService: DriverService
  ) {
    this.formulario1 = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      typePerson: new FormControl('', [Validators.required]),
    })
  }

ngOnInit(): void {

}
  nuevoConductor: Driver = { name: 'Nombre', lastName: 'Apellido', typePerson: 'Conductor' };

  agregarConductor() {
    // Aquí puedes implementar la lógica para agregar la persona a una lista o enviarla a una API, por ejemplo
    console.log(this.nuevoConductor);
    // Limpia el formulario después de agregar la persona
    this.nuevoConductor = { name: '', lastName: '', typePerson: '' };
  }

  async onSubmit(){
    if (this.formulario1.valid) {
    console.log(this.formulario1.value);
    const response = await this.driverService.addDriver(this.formulario1.value);
    console.log(response);
  }
  }
}
