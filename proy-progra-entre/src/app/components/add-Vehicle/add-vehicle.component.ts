import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle.interface';
import { FormControl, FormGroup, Validators, FormBuilder  } from '@angular/forms';
import { VehicleService } from 'src/app/services/vehicle.service';
import { TypeVehicleService } from 'src/app/services/typeVehicle.service';
import { TypeVehicle } from 'src/app/interfaces/typeVehicle.interface';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
  formulario1: FormGroup;
  typeVehicles:TypeVehicle[] = [];

  constructor(
    private VehicleService: VehicleService,
    private TypeVehicleService : TypeVehicleService
  ) {
    this.formulario1 = new FormGroup({
      plate: new FormControl('', [Validators.required]),
      typeVehicle: new FormControl('', [Validators.required]),
      observation: new FormControl('', [Validators.required]),
    })
  }

ngOnInit(): void {
  this.TypeVehicleService.getTypeVehicles().subscribe(
    (typeVehicles) => {
      this.typeVehicles = typeVehicles;
    }
  )
}
  nuevo: Vehicle = { plate: 'Placa', typeVehicle:'Clasificado',observation:'CAMION' };

  addVehiculo() {
    // Aquí puedes implementar la lógica para agregar la persona a una lista o enviarla a una API, por ejemplo
    console.log(this.nuevo);
    // Limpia el formulario después de agregar la persona
    this.nuevo = { plate: '', typeVehicle:'',observation:'' };
  }



  async onSubmit(){
    if (this.formulario1.valid) {
    console.log(this.formulario1.value);
    const response = await this.VehicleService.addVehicle(this.formulario1.value);
    console.log(response);
  }
  }
}
