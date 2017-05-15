function validateForm(argument) 
{
	event.preventDefault();
	var name = document.forms["contactForm"]["name"].value;
	var emailId = document.forms["contactForm"]["email"].value;
	var message = document.forms["contactForm"]["message"].value;	

	if (name.indexOf(' ') >= 0) {		  
		name = name.split(' ').slice(0, Number.POSITIVE_INFINITY).join(' ');	 	  
	} 

	//alert('name ' + name + 'emailId ' + emailId + 'message ' + message);

	$.ajax(
			{
				url:"./sendMailTest",
				type: "POST",
				data: {name: name, emailId: emailId, message: message},
				cache: false,
				success : function(data)
				{
					//alert('Message sent successfully' + data);
					console.log("SUCCESS: ", data);
					// Success message
					$('#success').html("<div class='alert alert-success'>");
					$('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
					.append( "</button>");
					$('#success > .alert-success')
					.append("<strong>Your message has been sent. </strong>");
					$('#success > .alert-success')
					.append('</div>');

					//clear all fields
					$('#contactForm').trigger("reset");
				},
				error : function(e)
				{
					alert('Message failed please drop mail directly to dineshkumarjaju@gmail.com '+ e);
					console.log("ERROR: ", e);
					// Fail message
					$('#success').html("<div class='alert alert-danger'>");
					$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
					.append( "</button>");
					$('#success > .alert-danger').append("<strong>Sorry "+name+" it seems that my mail server is not responding...</strong> Could you please email me directly to ");
					$('#success > .alert-danger').append(" <a href='mailto:dineshkumaraju@gmail.com' style='color:red;'>dineshkumarjaju@gmail.com</a>. Sorry for the inconvenience!");
					$('#success > .alert-danger').append('</div>'); 				
					//clear all fields
					$('#contactForm').trigger("reset");
				}
			}

	);
}