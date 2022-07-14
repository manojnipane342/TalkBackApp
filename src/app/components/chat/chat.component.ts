import { Component, OnInit } from '@angular/core';
import { MessageDto } from 'src/app/models/MessageDto';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  
  title = '';
  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.retrieveMappedObject().subscribe( (receivedObj: MessageDto) => { this.addToInbox(receivedObj);});  // calls the service method to get the new messages sent
                                                     
  }

  msgDto: MessageDto = new MessageDto();
  msgInboxArray: MessageDto[] = [];

  send(): void {
    const input1 = document.getElementById('name') as HTMLInputElement | null;
    const value1 = input1?.value;

    const input2 = document.getElementById('message') as HTMLInputElement | null;
    const value2 = input2?.value;

    if(this.msgDto) {
      if(value1?.length == 0 || value2?.length == 0){
        window.alert("Both fields are required.");
        debugger;
        return;
      } else {
        this.chatService.broadcastMessage(this.msgDto);
        this.msgDto.msgText = '';
      }
    }
  }

  addToInbox(obj: MessageDto) {
    let newObj = new MessageDto();
    newObj.user = obj.user;
    newObj.msgText = obj.msgText;
    this.msgInboxArray.push(newObj);
  }

}
