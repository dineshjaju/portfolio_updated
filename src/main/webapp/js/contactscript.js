function validateForm(argument) 
{
	var name = document.forms["contactForm"]["name"].value;
	var emailId = document.forms["contactForm"]["email"].value;
	var message = document.forms["contactForm"]["message"].value;

	alert(name + emailId + message);

	$.ajax(
		{
			url:"mail/contact_me.php",
			type: "POST",
			data: {name: name, email: emailId, message: message},
			cache: false,
			success : function()
			{
				alert('Message sent successfully');
				$('#success').html("<h1>Message sent successfully</h1>")
			},
			error : function()
			{
				alert('Message failed please drop mail directly to dineshkumaraju');
			}
		}

	);
}