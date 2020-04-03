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
			$content = validationAccountEmail();
		}
		if($action == "validateProduct") {
			$title = 'S\'il vous plait Monsieur aidez nous a expertiser ce produit';
			$content = productValidationEmail();
		}
		if($action == "donation") {
			$title = 'Vos produits ont ete commander pour en faire un don';
			$content = donationEmail();
		}
		Mail::send([], $data, function($message) use ($content, $receiverEmail, $title) {
			$message->to($receiverEmail, ''.getUsernameFromEmail($receiverEmail))->subject($title);
			$message->setBody($content, 'text/html');
			$message->from('emselt10@gmail.com', 'Prevent Covid-19');
		});
		return response()->json("The email has been sent successfully", 200);
	}

	function formattedData($str) {
		$str1 = $str;
		$str1 = str_replace('ü', 'ue', $str1);
		$str1 = str_replace('ö', 'oe', $str1);
		$str1 = str_replace('ä', 'ae', $str1);
		$str1 = str_replace('ß', 'ss', $str1);
		$str1 = str_replace('Ü', 'Ue', $str1);
		$str1 = str_replace('Ö', 'Oe', $str1);
		$str1 = str_replace('Ä', 'Ae', $str1);
		return $str1;
	}