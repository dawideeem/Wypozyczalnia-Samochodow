import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import {MessangerService } from 'src/app/services/messanger.service';
import { UserService } from 'src/app/admin/users/userlist/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users: User[]=[];
  selectedUserId!: string;
  isEdit = false;

  constructor(private userService: UserService,    private messangerService: MessangerService) { }

  ngOnInit(): void {
    this.getUserList();
  }

  private getUserList() {
    this.userService.getAllUsers().subscribe(
      (res)=>{
        this.users=res;
      },
      async(err)=>{
        console.log('Nie udalo sie pobrac listy użytkowników')
      }
    )
    };

    delete(id: any){
      this.userService.deleteUser(id).subscribe(
        () => this.getUserList(),
        () => this.getUserList(),
        () => this.getUserList()
      );
    }
  
    getUserId(id:any){
      this.messangerService.sendId(id)
    } 

}
