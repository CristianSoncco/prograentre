import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Driver } from '../interfaces/driver.interface';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private firestore: Firestore) { }

  addDriver(driver: Driver) {
    driver.name =  driver.name.toUpperCase();
    driver.lastName =  driver.lastName.toUpperCase();
    driver.typePerson =  driver.typePerson.toUpperCase();
    const placeRef = collection(this.firestore, 'drivers');
    return addDoc(placeRef, driver);
  }

  getDrivers():Observable<Driver[]> {
    const placeRef = collection(this.firestore, 'drivers');
    return collectionData(placeRef,{idField: 'id'}) as Observable<Driver[]>;
  }

  deleteDriver(driver: Driver) {
    const placeRef = doc(this.firestore, `drivers/${driver.id}`);
    return deleteDoc(placeRef);
  }
}
