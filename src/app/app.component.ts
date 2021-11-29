import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { IUser } from './User/I-user';
import { UserService } from './User/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isEnable: boolean = false;
  isLoggedUser: any;
  userData!: IUser;
  ngOnInit(): void {
    this.authService.isAuthenticated.subscribe((res) => {
      this.isLoggedUser = res;
      this.userData=this.userService.getUserName();
    })
    this.authService.isAdmin.subscribe((res) => {
      this.isEnable = res;
    })
  }
  title = 'wypozyczalnia';

  constructor(
    private authService: AuthenticationService,
    private userService: UserService
  ){}

  toLogin() {
    setTimeout(() => {
      document.getElementById("login")?.scrollIntoView();
    })
  }



  logOut() {
    this.authService.logout();
    this.authService.isAdmin.next(false)
  }
}
