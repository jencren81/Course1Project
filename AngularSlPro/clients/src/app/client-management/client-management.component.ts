import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration.service';
import { Client } from './client';
import { Clientinfo } from './clientinfo';
import { ClientserviceService } from '../clientservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientForm } from './client-form';



@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})




export class ClientManagementComponent implements OnInit{

  
clients: Client[] = [];  
selectedClients?: Client;

clientModel= new ClientForm('', 13 , '', 2, 0,'', '', 7777777777);





constructor (private clientserviceservice: ClientserviceService, private _registrationservice: RegistrationService) { }

 ngOnInit(): void {
  this.getClient();
 }
 clientForm = new FormGroup ({})

onSubmit(){
  
    console.log(this.clientModel);
    alert("submited, check console");
      
}
onUpdate(){
  console.log();
  alert("client updated");
}
  onSelected(clients: Client): void {
    this.selectedClients = clients;
 }
 clientSubmited(){
  console.log(this.clientForm.get(""));
 }


getClient(): void{
this.clients=this.clientserviceservice.getClients();
}


}



// add(name: string): void {
//   name = name.trim();
//   if (!name) { return; }
//   this.clientserviceservice.addClient({ name } as Client)
//     .subscribe(client => {
//       this.clients.push(client);
//     });
// }








