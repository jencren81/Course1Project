import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

username : string ="";
show: boolean= false;
  router: any;
submit(){
console.log("user name is " + this.username)
this.clear();
alert ("actions will be documented under logged user")
}
clear(){
this.username ="";
this.show = true;
}
}