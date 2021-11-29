import { Component, OnInit } from '@angular/core';
import { Msg } from 'src/app/models/msg';
import { MsgService } from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  msg: Msg[]=[];

  constructor(private msgService: MsgService) { }

  ngOnInit(): void {
this.getMsgList();
  }

  getMsgList(){
    this.msgService.getAllMsg().subscribe(
      (res)=>{
        this.msg=res;
      },
      (err)=>{
        console.log('Nie udalo sie pobrac listy wiadomosci')
      }
    )
  }

  delete(id: any){
    this.msgService.deleteMsg(id).subscribe(
      () => this.getMsgList(),
      () => this.getMsgList(),
      () => this.getMsgList()
    );
  }

}
