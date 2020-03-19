<?php

	
   	function getUsernameFromEmail($email) {
      $username = '';  $i = 0;
      while ($email[$i] != '@'){$username = $username.''.$email[$i]; $i++;}
      return $username;
  	}
  	function sendValidationEmail($toValidatemail) {
  		return url('validateEmail');
  	}
  
   	function sendmail($receiverEmail,  $action){
		$data = array('name'=>"Prevent Corona virus");
		$title = "";
		if($action == "register"){
			$title = 'Veuillez confirmez votre adresse email';
			$content = '';
		}
		if($action == "validateProduct"){
			$title = 'S\'il vous plait Monsieur aidez nous a expertiser ce produit';
			$content = '';
		}
		Mail::send([], $data, function($message) use ($content, $receiverEmail, $title) {
			$message->to($receiverEmail, ''.getUsernameFromEmail($receiverEmail))->subject($title);
			$message->setBody($content, 'text/html');
			$message->from('no_reply2@store-germany.de', 'Prevent Covid-19');
		});
		return response()->json("The email has been sent successfully", 200);
	}