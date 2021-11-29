import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserpanelRoutingModule } from './userpanel-routing.module';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    UserpanelRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserpanelModule { }
