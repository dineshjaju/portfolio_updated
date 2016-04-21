<?php

require_once 'lib/swift_required.php'; 

/*// check if fields passed are empty
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		|| 
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
	
// create email body and send it	
$to = 'dineshkumarjaju@gmail.com'; // put your email address here
$email_subject = "Contact form submitted by:  $name";
$email_body = "You have received a new message. \n\n".
				  " Here are the details:\n \nName: $name \n ".
				  "Email: $email_address\n Message: \n $message";
$headers = "From: noreply@yourdomain.com\n"; 
// Since this email form will be generated from your server. The From email address will be best using something like this noreply@yourdomain.com
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);*/
		

// make sure you get these SMTP settings right
$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 587, "tls") 
    ->setUsername('dineshkumarjaju@gmail.com')
    ->setPassword('pc2727pcds');

$mailer = Swift_Mailer::newInstance($transport);
// the message itself
$message = Swift_Message::newInstance('email subject')
    ->setFrom(array('dineshkumarjaju@gmail.com' => 'no reply'))
    ->setTo(array('dineshkumarjaju@gmail.com'))
    ->setBody("email body");

$result = $mailer->send($message);

return true;

?>
