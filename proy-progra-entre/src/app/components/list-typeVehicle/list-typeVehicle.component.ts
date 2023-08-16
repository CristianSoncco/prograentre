import { Component, OnInit } from '@angular/core';
import { TypeVehicle } from 'src/app/interfaces/typeVehicle.interface';
import { TypeVehicleService } from 'src/app/services/typeVehicle.service';

@Component({
  selector: 'app-list-typeVehicle',
  templateUrl: './list-typeVehicle.component.html',
  styleUrls: ['./list-typeVehicle.component.css']
})
export class ListTypeVehicleComponent implements OnInit {

  typeVehicles:TypeVehicle[] = [];

  constructor(
    private typeVehicleService: TypeVehicleService
  ) {
    this.typeVehicles = [];
   }

  ngOnInit(): void {
    this.typeVehicleService.getTypeVehicles().subscribe(
      (typeVehicles) => {
        this.typeVehicles = typeVehicles;
      }
    )
  }

  async onClickDelete(typeVehicle: TypeVehicle){
    const response = await this.typeVehicleService.deleteTypeVehicle(typeVehicle);
    console.log(response);
  }

}
