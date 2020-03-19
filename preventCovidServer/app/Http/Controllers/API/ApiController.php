<?php

namespace App\Http\Controllers\API;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Excel;

use Webklex\IMAP\Client;

use App\models\Quiz;
use App\models\Test;

class ApiController extends Controller
{

    public function mailbox() {
    	$oClient = new Client([
		    'host'          => 'imap.strato.de',
		    'port'          => 993,
		    'encryption'    => 'ssl',
		    'validate_cert' => true,
		    'username'      => 'lager_bestand_test@store-germany.com',
		    'password'      => 'lager_bestand_test',
		    'protocol'      => 'imap'
		]);
		
		$oClient->connect();
		$folders = $oClient->getFolders();
		$messages = $oClient->getUnseenMessages($folders[2]);
		$attachment_list = [];
		$i = 0;
		foreach($messages as $message) {
	        $attachments = $message->getAttachments();
	        foreach($attachments as $attachment) {
	        	$file_name = 'file'.date('Y_m_d H_i_s').'_'.$i.'.CSV';
		        $attachment->save(null, $file_name);
		        $attachment_list[$i] = storage_path($file_name);
		        $i = $i + 1;
		    }
    	}
    	return $this->updateDatabaseWithIMAPData($attachment_list);
	}

	public function updateDatabaseWithIMAPData($files) {
		$list = [];
		$i = 0;
    	if($files != '[]') {
    		foreach($files as $file) { 
    			$str = file_get_contents($file);
				$str1 = str_replace(',', '.', $str);
				$str2 = str_replace(';', ',', $str1);
				file_put_contents($file, $str2);
				$csvData = array_map('str_getcsv', file($file));
				$line1 = $csvData[0]; 
				if((isset($line1[5])) && ($line1[3] == 'Artikel-Nr.')) {
					foreach($csvData as $line) { 
						if($line != $line1) {
							/* $prod = DB::table('product')->where('A4', 'COS_'.$line[3])->get();
							if($prod != '[]') {
								DB::table('product')->where('prod_id', $prod[0]->prod_id)->update(['quantity' => ''.$line[5]]);
							}*/
							$list[$i] = 1;
							$i = $i + 1;
						}
					}
				}
				if($line1[0] == 'Artikel-Nr.') {
					foreach($csvData as $line) { 
						if($line != $line1) {
							/*$prod = DB::table('product')->where('A4', 'COS_'.$line[0])->get();
							if($prod != '[]') {
								DB::table('product')->where('prod_id', $prod[0]->prod_id)->update(['quantity' => ''.$line[3]]);
							}*/
							$list[$i] = 2;
							$i = $i + 1;
						}
						
					}
				}
    		}
    	}
    	return response()->json($list, 200);
	}

	public function getAllQuiz() {
		return response()->json(Quiz::get());
	}
	public function getAllTest() {
		return response()->json(Test::get());
	}
	public function addQuiz(Request $req) {

	}
	public function addTest(Request $req) {
		
	}
	public function test() {
        DB::table('quiz')->insert([
            'quiz_content' => 'Une question de plus',
            'quiz_answer_proposals' => 'tt',
            'quiz_answer' => 'tt',
            'quiz_answer_proposals' => 'tt',
            'quiz_justification_required' => 'tt',
            'quiz_justification' => 'tt',
            'quiz_difficulty_level' => 'tt',
            'quiz_lifetime' => 'ttttt',
            'quiz_lifetime_unit' => 'ttt',
            'quiz_marks' => 'tt',
            'quiz_state' => 'ttttt'
        ]);
    }
}
