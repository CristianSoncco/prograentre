import { Component, OnInit } from '@angular/core';
import { Assistant } from 'src/app/interfaces/assistant.interface';
import { AssistantService } from 'src/app/services/assistant.service';

@Component({
  selector: 'app-list-assistant',
  templateUrl: './list-assistant.component.html',
  styleUrls: ['./list-assistant.component.css']
})
export class ListAssistantComponent implements OnInit {

  assistants:Assistant[] = [];

  constructor(
    private assistantService: AssistantService
  ) {
    this.assistants = [];
   }

  ngOnInit(): void {
    this.assistantService.getAssistants().subscribe(
      (assistants) => {
        this.assistants = assistants;
      }
    )
  }

  async onClickDelete(assistant: Assistant){
    const response = await this.assistantService.deleteAssistant(assistant);
    console.log(response);
  }

}
