import { Component, OnInit } from '@angular/core';
import { TypeVehicle } from '../../interfaces/typeVehicle.interface';
import { FormControl, FormGroup, Validators, FormBuilder  } from '@angular/forms';
import { TypeVehicleService } from 'src/app/services/typeVehicle.service';

@Component({
  selector: 'app-add-typeVehicle',
  templateUrl: './add-typeVehicle.component.html',
  styleUrls: ['./add-typeVehicle.component.css']
})
export class AddTypeVehicleComponent implements OnInit {
  formulario1: FormGroup;

  constructor(
    private typeVehicleService: TypeVehicleService
  ) {
    this.formulario1 = new FormGroup({
      name: new FormControl('', [Validators.required])
    })
  }

ngOnInit(): void {

}
  nuevo: TypeVehicle = { name: 'Nombre Tipo de Vehiculo' };

  agregarTipoVehiculo() {
    // Aquí puedes implementar la lógica para agregar la persona a una lista o enviarla a una API, por ejemplo
    console.log(this.nuevo);
    // Limpia el formulario después de agregar la persona
    this.nuevo = { name: '' };
  }

  async onSubmit(){
    if (this.formulario1.valid) {
    console.log(this.formulario1.value);
    const response = await this.typeVehicleService.addTypeVehicle(this.formulario1.value);
    console.log(response);
  }
  }
}
