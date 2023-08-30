import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Scheduling } from '../interfaces/scheduling.interface';


@Injectable({
  providedIn: 'root'
})
export class SchedulingService {

  constructor(private firestore: Firestore) { }

  addScheduling(scheduling: Scheduling) {
    const placeRef = collection(this.firestore, 'schedulings');
    return addDoc(placeRef, scheduling);
  }

  getScheduling():Observable<Scheduling[]> {
    const placeRef = collection(this.firestore, 'schedulings');
    return collectionData(placeRef,{idField: 'id'}) as Observable<Scheduling[]>;
  }

  deleteScheduling(scheduling: Scheduling) {
    const placeRef = doc(this.firestore, `schedulings/${scheduling.id}`);
    return deleteDoc(placeRef);
  }
}
