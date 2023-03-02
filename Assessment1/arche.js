
var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth()+1);
var date = (currentDateTime.getDate()+1);

if(date<10) {
    date = '0' + date;
}

if (month<10) {
    month = '0' + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var selectdate = document.querySelector("#select-date");

selectdate.setAttribute("min", dateTomorrow);


function logSubmit(event) {
    log.textContent = 'Appointment Request Submitted! Thank you!';
    event.preventDefault();

  
    const requestDate = document.getElementById('select-date').value

    const customerName = document.getElementById('custname').value
    
    const customerEmail = document.getElementById('custemail').value

    let meetingOptions = [];
    let checkboxes = document.getElementsByName('options');
    for(let i = 0; i< checkboxes.length; i++){
        if(checkboxes[i].checked){
            meetingOptions.push(checkboxes[i].value);
        }
    }
   
    
    console.log(customerName)
    console.log(customerEmail)
    console.log(requestDate)
    console.log(meetingOptions)
}


const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);









