import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { ClientMeetingManagementComponent } from './client-meeting-management/client-meeting-management.component';
import { ClientserviceService } from './clientservice.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullCalendarModule } from '@fullcalendar/angular';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    ClientManagementComponent,
    ClientMeetingManagementComponent,
    LoginComponent
  ],
  exports:[
    MatButtonModule,
    MatInputModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
  ReactiveFormsModule,
    FullCalendarModule,
    HttpClientModule,MatButtonModule,
    MatInputModule,
 
  
  ],
  providers: [ClientserviceService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
