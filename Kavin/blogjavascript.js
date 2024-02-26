// JavaScript (script.js)
document.addEventListener("DOMContentLoaded", function() {
    // Find the link for outdoor catering
    var outdoorCateringLink = document.getElementById('outdoor-catering-link');
    
    // Add click event listener to the link
    outdoorCateringLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        
        // Create the form elements
        var form = document.createElement('form');
        form.setAttribute('id', 'cateringForm');
        
        // Add the onsubmit attribute to the form
        form.setAttribute('onsubmit', 'submitForm(); return false;');

        // Add form fields (labels, inputs, etc.)
        form.innerHTML = `
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br><br>
            
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required><br><br>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
            
            <label for="city">City:</label>
            <input type="text" id="city" name="city" required><br><br>
            
            <label for="message">Message:</label><br>
            <textarea id="message" name="message" rows="4" cols="50" required></textarea><br><br>
            
            <input type="submit" value="Submit">
        `;
        
        // Open a new window to display the form
        var newWindow = window.open("", "_blank");
        // Write the form content into the new window
        newWindow.document.write('<!DOCTYPE html><html><head><title>Outdoor Catering Form</title></head><body>');
        newWindow.document.write('<h2>Outdoor Catering Enquiry Form</h2>');
        newWindow.document.write(form.outerHTML);
        newWindow.document.write('</body></html>');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Get the email enquiry link element
    var emailEnquiryLink = document.getElementById("emailEnquiryLink");

    // Add click event listener to the email enquiry link
    emailEnquiryLink.addEventListener("click", function(event) {
        // Prevent the default behavior of the link
        event.preventDefault();
        
        // Open the user's default email client with a new email message addressed to flavourfusion5@gmail.com
        window.location.href = "mailto:flavourfusion5@gmail.com";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Get the element for "Sweets and Savouries"
    var sweetsAndSavouriesLink = document.getElementById("sweetsAndSavouriesLink");

    // Add click event listener to the "Sweets and Savouries" link
    sweetsAndSavouriesLink.addEventListener("click", function(event) {
        // Prevent the default behavior of the link
        event.preventDefault();
        
        // Create a new window
        var newWindow = window.open("", "_blank");
        
        // Create the HTML content for the new page
        var htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head style="background-color: rgb(255, 229, 180);">
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Our Specials</title>
                <link rel="stylesheet" type="text/css" href="blogstyle.css">
            </head>
            <body style="background-color: rgb(255, 229, 180);">
                <div class="specials-page">
                <center>
                    <h1>Our Specials</h1>
                    </center>
                    <table cellspacing="20" align="center" class="services-table">
        <tr>
            <td>
                <img src="GM1.png" width="300" height="340" alt="scissors" title="not recommended">
            </td>
            <td>
                <img src="GM2.png" width="300" height="340" alt="scissors" title="not recommended">
            </td>
            <td>
                <img src="GM3.png" width="300" height="340" alt="scissors" title="not recommended">
            </td>
        </tr>
        <tr>
            <td>
                <img src="GM4.png" width="300" height="340" alt="scissors" title="not recommended">
            </td>
            <td>
                <img src="GM5.png" width="300" height="340" alt="scissors" title="not recommended">
            </td>
            <td>
                <img src="GM6.png" width="300" height="340" alt="scissors" title="not recommended">
            </td>
        </tr>
    </table>
                </div>
            </body>
            </html>
        `;

        // Write the HTML content to the new window
        newWindow.document.write(htmlContent);
    });
});
const options = document.querySelectorAll('.option');
options.forEach(option => {
    option.addEventListener('click', function() {
        options.forEach(opt => opt.classList.add('hidden'));
        this.classList.remove('hidden');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Get the element for "Sweets and Savouries"
    var OurmenuLink = document.getElementById("OurmenuLink");

    // Add click event listener to the "Sweets and Savouries" link
    OurmenuLink.addEventListener("click", function(event) {
        // Prevent the default behavior of the link
        event.preventDefault();
        
        // Create a new window
        var newWin_ow = window.open("", "_blank");
        
        // Create the HTML content for the new page
        var htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head style="background-color: rgb(255, 229, 180);">
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Our Specials</title>
                <link rel="stylesheet" type="text/css" href="blogstyle.css">
            </head>
            <body style="background-color: rgb(255, 229, 180);">
                
                <center>
                    <h1 class= "glitter-text">South Indian</h1>
                    </center>
                    <table cellspacing="20" align="center">
        <tr>
            <td>
                <img src="SN1.png" width="1500" height="340" alt="scissors" title="not recommended">
            </td>
           </tr>
        <tr>
            <td>
                <img src="SN2.png" width="1500" height="340" alt="scissors" title="not recommended">
            </td>
           </tr>
        </table>
        <center>
        <h2 class= "glitter-text" >Wheat/Maida varieties</h2>
        </center>
        <table cellspacing="20" align="center">
        <tr>
            <td>
                <img src="Z1.png" width="1500" height="340" alt="scissors" title="not recommended">
            </td>
           </tr>
        <tr>
            <td>
                <img src="SN4.png" width="800" height="340" alt="scissors" title="not recommended">
            </td>
           </tr>
        </table>
        <center>
        <h2 class= "glitter-text" >Quick starters</h2>
        </center>
        <table cellspacing="20" align="center">
        <tr>
            <td>
                <img src="Z2.png" width="1500" height="340" alt="scissors" title="not recommended">
            </td>
           </tr>
           </table>
           <center>
           <h3 class= "glitter-text" >Hot beverages</h3>
           </center>
           <table cellspacing="20" align="center">
           <tr>
               <td>
                   <img src="SN7.png" width="1500" height="340" alt="scissors" title="not recommended">
               </td>
              </tr>
              </table>   
            </body>
            </html>
        `;

        // Write the HTML content to the new window
        newWin_ow.document.write(htmlContent);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Find the link for outdoor catering
    var ContactusLink = document.getElementById('ContactusLink');
    
    // Add click event listener to the link
    ContactusLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        
        // Create the form elements
        var form = document.createElement('form');
        form.setAttribute('id', 'cateringForm');
        
        // Add the onsubmit attribute to the form
        form.setAttribute('onsubmit', 'submitForm(); return false;');

        // Add form fields (labels, inputs, etc.)
        form.innerHTML = `
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br><br>
            
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required><br><br>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
            
            <label for="city">City:</label>
            <input type="text" id="city" name="city" required><br><br>
            
            <label for="message">Message:</label><br>
            <textarea id="message" name="message" rows="4" cols="50" required></textarea><br><br>
            
            <input type="submit" value="Submit">
        `;
        
        // Open a new window to display the form
        var newWindow = window.open("", "_blank");
        // Write the form content into the new window
        newWindow.document.write('<!DOCTYPE html><html><head><title>Contact us</title></head><body>');
        newWindow.document.write('<h2>Contact us Form</h2>');
        newWindow.document.write(form.outerHTML);
        newWindow.document.write('</body></html>');
    });
});
document.getElementById('facebookLink').addEventListener('click', function() {
    window.location.href = 'https://www.facebook.com'; // Redirect to Facebook
});

document.getElementById('twitterLink').addEventListener('click', function() {
    window.location.href = 'https://twitter.com'; // Redirect to Twitter
});

document.getElementById('instagramLink').addEventListener('click', function() {
    window.location.href = 'https://www.instagram.com'; // Redirect to Instagram
});

document.getElementById('youtubeLink').addEventListener('click', function() {
    window.location.href = 'https://www.youtube.com'; // Redirect to Youtube
});
