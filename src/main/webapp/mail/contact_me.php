<?php

# Include the Autoloader (see "Libraries" for install instructions)
require 'vendor/autoload.php';
use Mailgun\Mailgun;

# Instantiate the client.
$mgClient = new Mailgun('key-61f5c5ad90ed0752759c11abf3231944');
$domain = "sandboxd2aa3c8a94f247c2bd8ee1d83fa44855.mailgun.org";

# Make the call to the client.
$result = $mgClient->sendMessage("$domain",
                  array('from'    => 'Mailgun Sandbox <postmaster@sandboxd2aa3c8a94f247c2bd8ee1d83fa44855.mailgun.org>',
                        'to'      => 'dineshjaju <dineshkumarjaju@gmail.com>',
                        'subject' => 'Hello dineshjaju',
                        'text'    => 'Congratulations dineshjaju, you just sent an email with Mailgun!  You are truly awesome!  You can see a record of this email in your logs: https://mailgun.com/cp/log .  You can send up to 300 emails/day from this sandbox server.  Next, you should add your own domain so you can send 10,000 emails/month for free.'));
    
		

?>
