import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Person } from '../interfaces/person.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private firestore: Firestore) { }

  addPerson(person: Person) {
    const placeRef = collection(this.firestore, 'persons');
    return addDoc(placeRef, person);
  }

  getPersons():Observable<Person[]> {
    const placeRef = collection(this.firestore, 'persons');
    return collectionData(placeRef,{idField: 'id'}) as Observable<Person[]>;
  }

  deletePerson(person: Person) {
    const placeRef = doc(this.firestore, `persons/${person.id}`);
    return deleteDoc(placeRef);
  }
}
