import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Assistant } from '../interfaces/assistant.interface';

@Injectable({
  providedIn: 'root'
})
export class AssistantService {

  constructor(private firestore: Firestore) { }

  addAssistant(assistant: Assistant) {
    assistant.name =  assistant.name.toUpperCase();
    assistant.lastName =  assistant.lastName.toUpperCase();
    assistant.typePerson =  assistant.typePerson.toUpperCase();
    const placeRef = collection(this.firestore, 'assistants');
    return addDoc(placeRef, assistant);
  }

  getAssistants():Observable<Assistant[]> {
    const placeRef = collection(this.firestore, 'assistants');
    return collectionData(placeRef,{idField: 'id'}) as Observable<Assistant[]>;
  }

  deleteAssistant(assistant: Assistant) {
    const placeRef = doc(this.firestore, `assistants/${assistant.id}`);
    return deleteDoc(placeRef);
  }
}
