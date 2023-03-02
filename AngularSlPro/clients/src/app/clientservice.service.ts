import { Injectable } from '@angular/core';
import { Client } from './client-management/client';
import { Clientinfo } from './client-management/clientinfo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {

  constructor() { }

 getClients(): Client[]{
return [
  {id: 1, name: "North Highland University", location: "Vermont", option: 1, contact: 'Graham Norton', phone: 8174425679, cost: 23000, build:"8 weeks"},
  {id: 2, name: "Caligra Observatory", location: "Oregon", option: 1, contact: 'Julia Meyers', phone: 9489359584, cost: 45000, build: "7 weeks"},
  {id: 3, name: "JRR Tolkien Concert Hall", location: "Washington", option: 2, contact: 'Rick Johnson', phone: 5893973871, cost: 36000, build: "6 weeks"},
  {id: 4, name: "Panther Pavillion", location: "Texas", option: 1, contact: 'Barnaby Smith', phone: 9723456987, cost: 25000, build: "6 weeks"},
  {id: 5, name: "Krzwwv Domek Coffee", location: "Georgia", option: 2, contact: 'Lisa Beyer', phone: 7364925069, cost: 29000, build: "8 weeks"},
  {id: 6, name: "Pinacle Travel", location: "Louisiana", option: 1, contact: 'Roy Huckabee', phone: 3343456786, cost:30000, build: "6 weeks"},
  {id: 7, name: "Blue Iron River Restaurant", location: "Vermont", option: 1, contact: 'Nicholas Walker', phone: 3984095829, cost: 23000, build: "8 weeks"},
  {id: 8, name: "Anne Applebaum Museum", location: "California", option: 2, contact: 'April Adams', phone: 8473094069, cost: 47000, build: "12 weeks"},
  {id: 9, name: "Circuit Tech", location: "New York", option: 1, contact: 'Ryan Palomo', phone: 9830930582, cost: 25000, build: "7 weeks"},
  {id: 10, name: "Graham Jacobson", location: "Vermont", option: 2, contact: 'Georgia Onmemend', phone:2345309287, cost: 16000, build: "4 weeks"}
];
 }
}





// private clientsUrl = 'apt/clients'
// httpOptions = {headers:new HttpHeaders({'Content-Type': 'application/json'})
//};



// constructor(private http: HttpClient) { }
// getClient(): Observable<Client[]> {
//   return this.http.get<Client[]>(this.clientsUrl)
//     .pipe(
//       tap(_ => this.log('fetched clients')),
//       catchError(this.handleError<Client[]>('getClient', []))
//     );
// }

// getClients(): Observable<Client[]> {
//   return this.http.get<Client[]>(this.clientsUrl)
// }

// addClient(client: Client): Observable<Client> {
//   return this.http.post<Client>(this.clientsUrl,  client, this.httpOptions).pipe(
//     tap((newClient: Client) => this.log(`added client w/ id=${newClient.id}`)),
//     catchError(this.handleError<Client>('addClient'))
//   );
// }
//   log(arg0: string): void {
//     throw new Error('Method not implemented.');
//   }
//   handleError<T>(arg0: string): (err: any, caught: Observable<Client>) => import("rxjs").ObservableInput<any> {
//     throw new Error('Method not implemented.');
//   }
// }