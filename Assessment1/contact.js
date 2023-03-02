function logSubmit(e) {
    log.textContent = 'Your message has been submitted! Someone will be reaching out to you shortly.';
    e.preventDefault();

    const customerName = document.getElementById('custname').value;
    const customerEmail = document.getElementById('custemail').value;
    const customerPhone = document.getElementById('custphone').value


    let preferred = document.querySelector('#preferred').value   
    
  
    console.log(customerName)
    console.log(customerEmail)
    console.log(customerPhone)
    console.log(preferred)
}
    
    const form = document.getElementById('form2');
    const log = document.getElementById('log');
    form.addEventListener('submit', logSubmit);