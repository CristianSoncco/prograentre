import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { TypeVehicle } from '../interfaces/typeVehicle.interface';

@Injectable({
  providedIn: 'root'
})
export class TypeVehicleService {

  constructor(private firestore: Firestore) { }

  addTypeVehicle(typeVehicle: TypeVehicle) {
    typeVehicle.name =  typeVehicle.name.toUpperCase();
    const placeRef = collection(this.firestore, 'typeVehicle');
    return addDoc(placeRef, typeVehicle);
  }

  getTypeVehicles():Observable<TypeVehicle[]> {
    const placeRef = collection(this.firestore, 'typeVehicle');
    return collectionData(placeRef,{idField: 'id'}) as Observable<TypeVehicle[]>;
  }

  deleteTypeVehicle(typeVehicle: TypeVehicle) {
    const placeRef = doc(this.firestore, `typeVehicle/${typeVehicle.id}`);
    return deleteDoc(placeRef);
  }
}
