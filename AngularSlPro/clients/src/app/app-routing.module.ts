import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientManagementComponent } from './client-management/client-management.component'; 
import { ClientMeetingManagementComponent } from './client-meeting-management/client-meeting-management.component'


const routes: Routes = [
  {path:'client-management', component: ClientManagementComponent},
  {path:'client-meeting-management', component: ClientMeetingManagementComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
