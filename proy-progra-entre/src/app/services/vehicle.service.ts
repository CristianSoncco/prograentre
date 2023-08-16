import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Vehicle } from '../interfaces/vehicle.interface';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private firestore: Firestore) { }

  addVehicle(vehicle: Vehicle) {
    vehicle.plate =  vehicle.plate.toUpperCase();
    vehicle.typeVehicle =  vehicle.typeVehicle.toUpperCase();
    vehicle.observation =  vehicle.observation.toUpperCase();
    const placeRef = collection(this.firestore, 'vehicles');
    return addDoc(placeRef, vehicle);
  }

  getVehicles():Observable<Vehicle[]> {
    const placeRef = collection(this.firestore, 'vehicles');
    return collectionData(placeRef,{idField: 'id'}) as Observable<Vehicle[]>;
  }

  deleteVehicle(vehicle: Vehicle) {
    const placeRef = doc(this.firestore, `vehicles/${vehicle.id}`);
    return deleteDoc(placeRef);
  }
}
