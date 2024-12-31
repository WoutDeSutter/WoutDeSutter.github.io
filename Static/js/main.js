function sendEmail() {
    console.log('Hello there')
    const name = document.querySelector('#name')
    const last = document.querySelector('#lastname')
    const email = document.querySelector('#email')
    const mess = document.querySelector('#message')
    name.value = "";
    last.value = "";
    email.value = "";
    mess.value = "";
}

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(() => {
                console.log('SUCCESS!');
                alert('Bericht verzonden!')
                sendEmail();
            }, (error) => {
                console.log('FAILED...', error);
                alert('Error, Email niet verzondern')
            });
    });
}