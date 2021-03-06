import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { EditComponent } from './cars/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './cars/create/create.component';
import { ListComponent } from './cars/list/list.component';
import { UseraddComponent } from './users/useradd/useradd.component';
import { UserlistComponent } from './users/userlist/userlist.component';
import { UsereditComponent } from './users/useredit/useredit.component';
import { MessagesComponent } from './msg/messages/messages.component';



@NgModule({

  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],

  declarations: [EditComponent, CreateComponent, ListComponent, UseraddComponent, UserlistComponent, UsereditComponent, MessagesComponent]
})
export class AdminModule { }
