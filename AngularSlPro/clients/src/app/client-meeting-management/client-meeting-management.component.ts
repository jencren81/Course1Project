import { Component, OnInit } from '@angular/core';
import { Meeting } from './meeting';
import { meetinginfo } from './meetinginfo';
import { NgbAlert, NgbDatepicker, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule, NgForm } from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';



@Component({
  selector: 'app-client-meeting-management',
  templateUrl: './client-meeting-management.component.html',
  styleUrls: ['./client-meeting-management.component.css'],

})



export class ClientMeetingManagementComponent implements OnInit {

  events: any = [
    {title: 'NH', date: '2023-02-01'},
    {title: 'NH', date: '2023-02-05'},
    {title: 'NH', date: '2023-02-09'},
    {title: 'NH', date: '2023-02-13'},
    {title: 'NH', date: '2023-02-17'},
    {title: 'NH', date: '2023-02-21'},
    {title: 'NH', date: '2023-02-25'},
    {title: 'CO', date: '2023-02-19'},
    {title: 'CO', date: '2023-02-26'},
    {title: 'CO', date: '2023-03-05'},
    {title: 'CO', date: '2023-03-12'},
    {title: 'CO', date: '2023-03-19'},
    {title: 'CO', date: '2023-03-26'},
    {title: 'CO', date: '2023-04-02'},
    {title: 'JRR', date: '2023-01-01'},
    {title: 'JRR', date: '2023-01-08'},
    {title: 'JRR', date: '2023-01-15'},
    {title: 'JRR', date: '2023-01-22'},
    {title: 'JRR', date: '2023-01-29'},
    {title: 'JRR', date: '2023-02-05'},
    {title: 'JRR', date: '2023-02-12'},
    {title: 'PP', date: '2023-01-24'},
    {title: 'PP', date: '2023-01-28'},
    {title: 'PP', date: '2023-01-31'},
    {title: 'PP', date: '2023-02-04'},
    {title: 'PP', date: '2023-02-08'},
    {title: 'PP', date: '2023-02-12'},
    {title: 'PP', date: '2023-02-16'},
    {title: 'KD', date: '2022-04-02'},
    {title: 'KD', date: '2022-04-09'},
    {title: 'KD', date: '2022-04-16'},
    {title: 'KD', date: '2022-04-23'},
    {title: 'KD', date: '2022-04-30'},
    {title: 'KD', date: '2022-05-07'},
    {title: 'KD', date: '2022-05-14'},
    {title: 'PT', date: '2022-04-08'},
    {title: 'PT', date: '2022-04-12'},
    {title: 'PT', date: '2022-04-16'},
    {title: 'PT', date: '2022-04-20'},
    {title: 'PT', date: '2022-04-24'},
    {title: 'PT', date: '2022-04-28'},
    {title: 'PT', date: '2022-05-02'},
    {title: 'BI', date: '2022-05-04'},
    {title: 'BI', date: '2022-05-08'},
    {title: 'BI', date: '2022-05-12'},
    {title: 'BI', date: '2022-05-16'},
    {title: 'BI', date: '2022-05-20'},
    {title: 'BI', date: '2022-05-24'},
    {title: 'BI', date: '2022-05-28'},
    {title: 'AA', date: '2022-06-11'},
    {title: 'AA', date: '2022-06-18'},
    {title: 'AA', date: '2022-06-25'},
    {title: 'AA', date: '2022-07-02'},
    {title: 'AA', date: '2022-07-09'},
    {title: 'AA', date: '2022-07-16'},
    {title: 'AA', date: '2022-07-23'},
    {title: 'CT', date: '2022-08-08'},
    {title: 'CT', date: '2022-08-12'},
    {title: 'CT', date: '2022-08-16'},
    {title: 'CT', date: '2022-08-20'},
    {title: 'CT', date: '2022-08-24'},
    {title: 'CT', date: '2022-08-28'},
    {title: 'CT', date: '2022-09-01'},
    {title: 'GJ', date: '2022-11-22'},
    {title: 'GJ', date: '2022-11-26'},
    {title: 'GJ', date: '2022-11-30'},
    {title: 'GJ', date: '2022-12-04'},
    {title: 'GJ', date: '2022-12-08'},
    {title: 'GJ', date: '2022-12-12'},
    {title: 'GJ', date: '2022-05-16'},
  ];

  calendarOptions: CalendarOptions ={
   


    initialView: 'dayGridMonth',
    events: this.events,
 plugins: [dayGridPlugin]
  
   };
   
  meeting = meetinginfo;
  selectedId?: Meeting;

  

  arrivalForm:FormGroup | null = null;
calform = ReactiveFormsModule;
  handleDateClick: any;
  
  NgbDatepicker=new Date();
 
  
  constructor (private cli: FormBuilder) { 
  
  this.arrivalForm = this.cli.group({
    arrivalDate:[null, [Validators.required]],
    arrivalTime:[null, [Validators.required]]
  })
}

 
  
   ngOnInit(): void {
   
   
   }
   onSelected(meeting: Meeting): void {
    this.selectedId = meeting;
  
  }
 onAddNew(){
  console.log(''),
  alert('date selected');
 }
 
    
    // console.log(NgbDatepicker);
    // alert("submited, check console");
      
}
  
  // create(){
  //   if(this.arrivalForm?.valid) {
  //     let arrivalDate = new Date();

  //     let payload = {
  //       Arrival: arrivalDate
  //     } /*;
  //     this.timezoneSvc.Create(payload).subscribe(res=> {
  //       console.log(res);      })  */

  //   }
  
//}
