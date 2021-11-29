import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserpanelComponent } from './userpanel.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '', component: UserpanelComponent, children:[
      {path: 'edituser',component: EditComponent} 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserpanelRoutingModule { }
