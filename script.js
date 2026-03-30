// EmailJS configuration
const emailjs = require('emailjs-com');

const USER_ID = 'BjnEQ1uxyz_GQANV9';
const SERVICE_ID = 'service_y679b8o';
const TEMPLATE_ID = 'template_12w2oj6';
const REPLY_TEMPLATE_ID = 'template_0qrr2cs';

// Form submission handler
const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const email = formData.get('email'); // Assuming the form has an email input

    // Validation
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData)
        .then((response) => {
            console.log('Email sent successfully!', response);
        }, (error) => {
            console.error('Error sending email:', error);
        });
};

const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

// Add event listener to form
const formElement = document.getElementById('myForm'); // Replace 'myForm' with your form's ID
formElement.addEventListener('submit', handleSubmit);