import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/vehicle.interface';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.css']
})
export class ListVehicleComponent implements OnInit {

  vehicles:Vehicle[] = [];

  constructor(
    private vehicleService: VehicleService
  ) {
    this.vehicles = [];
   }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe(
      (vehicles) => {
        this.vehicles = vehicles;
      }
    )
  }

  async onClickDelete(vehicle: Vehicle){
    const response = await this.vehicleService.deleteVehicle(vehicle);
    console.log(response);
  }

}
