import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessangerService } from 'src/app/services/messanger.service';
import { UserEditService } from '../../users/useredit/user-edit.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {

   
  private id: string = '';
  users: any;
  credentials= new FormGroup({
    username: new FormControl (null,[Validators.required, Validators.minLength(3)]),
    password: new FormControl (null,[Validators.required, Validators.minLength(5)]),
    email: new FormControl (null,[Validators.required, Validators.email])
  });

  constructor(
    private formBuilder: FormBuilder,
    private userEditService: UserEditService,
    private router: Router,
    private messangerService: MessangerService,
  ) { }

  ngOnInit(): void {
    this.id=this.messangerService.getId();
    this.userEditService.getSelected(this.id).subscribe(
      (res)=>{
        this.users=res;
        this.credentials.patchValue(this.users);
      },
      async(err)=>{
        console.log('Nie udalo sie pobrac uzytkownika')
      }
    ) 
  }

   submit(){
    const userData = {
      username: this.credentials.controls.username.value,
      password: this.credentials.controls.password.value,
      email: this.credentials.controls.email.value
    };
    this.userEditService.editUser(userData, this.id).subscribe((res) => {

    }, (err) => {

    });
    this.router.navigate(['admin/userlist'])

  }


}
