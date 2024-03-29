document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contactForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        var formData = new FormData(form);
        formData.append('from', formData.get('email')); // Mailgun requires 'from' parameter to match the sender's email
        formData.append('to', 'dineshkumarjaju@gmail.com'); // Your email address where you want to receive the contact form submissions
        
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.mailgun.net/v3/www.dineshjaju.com/messages'); // Replace 'your-domain.com' with your Mailgun domain
        xhr.setRequestHeader('Authorization', 'Basic ' + btoa('api:')); // Replace 'YOUR_API_KEY' with your Mailgun API key
        xhr.onload = function () {
            if (xhr.status === 200) {
                $('#success').html("<div class='alert alert-success'>");
					$('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
					.append( "</button>");
					$('#success > .alert-success')
					.append("<strong>Your message has been sent. </strong>");
					$('#success > .alert-success')
					.append('</div>');

					//clear all fields
				$('#contactForm').trigger("reset");
            } else {
                //document.getElementById('response').textContent = 'Error sending message. Please try again later.';
				alert('Message failed please drop mail directly to dineshkumarjaju@gmail.com '+ e);
				console.log("ERROR: ", e);
					// Fail message
				$('#success').html("<div class='alert alert-danger'>");
				$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
					.append( "</button>");
				$('#success > .alert-danger').append("<strong>Sorry "+name+" it seems that mail server is not responding...</strong> Could you please email me directly to ");
				$('#success > .alert-danger').append(" <a href='mailto:dineshkumarjaju@gmail.com' style='color:red;'>dineshkumarjaju@gmail.com</a>. Sorry for the inconvenience!");
				$('#success > .alert-danger').append('</div>'); 				
					//clear all fields
				$('#contactForm').trigger("reset");
            }
        };
        xhr.send(formData);
    });
});
