import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/interfaces/driver.interface';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-list-driver',
  templateUrl: './list-driver.component.html',
  styleUrls: ['./list-driver.component.css']
})
export class ListDriverComponent implements OnInit {

  drivers:Driver[] = [];

  constructor(
    private driverService: DriverService
  ) {
    this.drivers = [];
   }

  ngOnInit(): void {
    this.driverService.getDrivers().subscribe(
      (drivers) => {
        this.drivers = drivers;
      }
    )
  }

  async onClickDelete(driver: Driver){
    const response = await this.driverService.deleteDriver(driver);
    console.log(response);
  }

}
