// document.getElementById('btn').addEventListener('click', function() {
//     // You can customize this action as needed
//     // For example, open a contact form, send an email, or redirect to a contact page

//     // Example: Open a contact form in a modal (you can create a modal for this)
//     alert('Thank you for your interest! Please contact me at: yashparaschandan4@gmail.com');

//     // Alternatively, you could redirect to a contact page
//     // window.location.href = 'contact.html';
// });

// Optional: Handle form submission with JavaScript
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Send the form data using Fetch API
    fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            this.reset(); // Reset the form
        } else {
            alert('There was a problem sending your message. Contact : yashparaschandan4@gmail.com');
        }
    }).catch(error => {
        alert('There was a problem sending your message. Contact : yashparaschandan4@gmail.com');
        console.error('Error:', error);
    });
});
