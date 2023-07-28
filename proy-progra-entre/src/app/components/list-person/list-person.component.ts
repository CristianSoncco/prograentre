import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person.interface';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  persons:Person[] = [];

  constructor(
    private personService: PersonService
  ) {
    this.persons = [];
   }

  ngOnInit(): void {
    this.personService.getPersons().subscribe(
      (persons) => {
        this.persons = persons;
      }
    )
  }

  async onClickDelete(person: Person){
    const response = await this.personService.deletePerson(person);
    console.log(response);
  }
}
