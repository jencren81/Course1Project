import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { LoginComponent } from './login/login.component';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})


export class AppComponent {
calendarOptions: CalendarOptions ={
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
};
login:LoginComponent={
  username: '',
  show: false,
  router: undefined,
  submit: function (): void {
    throw new Error('Function not implemented.');
  },
  clear: function (): void {
    throw new Error('Function not implemented.');
  }
}
constructor (private router: Router) {}
 
ngOnInit(): void {

}


goToPage(pageName:String): void{
  this.router.navigate([`${pageName}`]);
}
}
