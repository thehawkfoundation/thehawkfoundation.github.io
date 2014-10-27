<?php
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {

	//declare our assets 
	$name = stripcslashes($_POST['name']);
	$email = stripcslashes($_POST['email']);
	$recipient = stripcslashes('');
	$comment = stripcslashes($_POST['message']);
	$subject = "Website Message";
	$name_label = "Name";
	$email_label = "Email";
	$message_label = "Message";
	$auto_reply = 'false';
	$auto_reply_msg = stripcslashes($_POST['auto_reply_msg']);
	
	$date = date('r');
	
	$headers = "From: $email" . PHP_EOL .
		    "Reply-To: $email" . PHP_EOL .
		    "MIME-Version: 1.0" . PHP_EOL . 
		    "Content-type: text/plain; charset=UTF-8" . PHP_EOL .
		    "X-Mailer: BootSnap3 Contact";
$msg = "
--
$date
$name_label:	$name
$email_label:	$email
--

$message_label:

$comment 


--
$_SERVER[REMOTE_ADDR]
$_SERVER[HTTP_HOST]
--";
			
	//send the email 
	if(mail($recipient, '=?UTF-8?B?'.base64_encode($subject).'?=', $msg, $headers))
	{
		echo 'success'; 
	}else{
		echo 'error';
	}
	
	if($auto_reply == 'true')
	{
		$headers = "From: ".$recipient . PHP_EOL .
		    "Reply-To: ".$recipient . PHP_EOL .
		    "MIME-Version: 1.0" . PHP_EOL . 
		    "Content-type: text/plain; charset=UTF-8" . PHP_EOL .
		    "X-Mailer: BootSnap3 Contact.";
		    
		mail($email, '=?UTF-8?B?'.base64_encode('Re: '.$subject).'?=', $auto_reply_msg, $headers);
	}

}

?>
