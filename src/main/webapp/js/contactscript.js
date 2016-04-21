function validateForm(argument) 
{
	event.preventDefault();
	var name = document.forms["contactForm"]["name"].value;
	var emailId = document.forms["contactForm"]["email"].value;
	var message = document.forms["contactForm"]["message"].value;
	//alert(name + emailId + message);

	$.ajax(
		{
			url:"mail/contact_me.php",
			type: "POST",
			data: {name: name, email: emailId, message: message},
			cache: false,
			success : function()
			{
				//alert('Message sent successfully');
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
			error : function()
			{
				//alert('Message failed please drop mail directly to dineshkumaraju@gmail.com');
					// Fail message
 		 		$('#success').html("<div class='alert alert-danger'>");
            	$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            	 .append( "</button>");
            	$('#success > .alert-danger').append("<strong>Sorry "+firstName+" it seems that my mail server is not responding...</strong> Could you please email me directly to");
            	$('#success > .alert-danger').append(" dineshkumaraju@gmail.com. Sorry for the inconvenience!");
 	        	$('#success > .alert-danger').append('</div>'); 				
 				//clear all fields
 				$('#contactForm').trigger("reset");
			}
		}

	);
}