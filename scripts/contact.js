document.addEventListener('DOMContentLoaded', function() {
     document.getElementById('formcont').addEventListener('submit', async function(e) {
         e.preventDefault(); // Prevent the default form submission
 
         // Gather form data
         const formData = {
             sendersname: document.getElementById('Name').value,
             emailadd: document.getElementById('Email').value,
             subject: document.getElementById('Subject').value,
             phonenos: document.getElementById('Contact').value,
             text: document.getElementById('message').value
         };

         console.log(formData);
 
         try {
             const API = `http://localhost:5000/sendMail`;
             const response = await fetch(API, {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify(formData)
             });
 
             const data = await response.json();
             console.log('Mail sent successfully:', data);
             alert('Mail sent successfully!');
         } catch (error) {
             console.log('Error sending mail:', error);
             alert('Error sending mail.');
         }
     });
 });
 