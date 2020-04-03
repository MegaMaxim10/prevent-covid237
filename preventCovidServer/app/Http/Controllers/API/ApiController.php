<?php

namespace App\Http\Controllers\API;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Excel;
use Response;
use Webklex\IMAP\Client;
use File;
use App\Product;
use App\User;

class ApiController extends Controller
{

    public function saveProduct(Request $request) {
    	$user = DB::table('users')->where('email', 'admin@gmail.com')->get();
    	if($user != '[]') {
    		DB::table('product')->insert([
				'user_id' => 1, 
				'product_name' => $request->name,
				'product_price' => $request->price, 
				'product_link' => $this->getUrlImage($request),
				'product_delivery_locality' => $request->locality,
				'product_desc' => $request->description,
				'product_large_desc' => $request->largeDescription,  
				'product_state' => '0'
			]);
    	}
		return response()->json($request->name, 200);
	}
	public function getUrlImage(Request $request) {
		$filename =  'file_'.date('Y_m_d H_i_s').'.jpg';
		$path = $request->file->storeAS('public/', $filename);
		$urlImage = 'http://localhost:8000/api/images/'.$filename;
		return $urlImage;
	}
	public function getImage(Request $request, $filename) {
		$file = File::get(storage_path('app/public/'.$filename));
	    $type = File::mimeType(storage_path('app/public/'.$filename));
	    $response = Response::make($file, 200);
	    $response->header("Content-Type", $type);
	    return $response;
	}

	public function makeDonation(Request $request) {
		$state = 'false';
		$user = DB::table('users')->where('email', 'admin@gmail.com')->get();
    	if($user != '[]') {
    		DB::table('donation')->insert([
				'user_id' => $user[0]->user_id,  	 	 
				'don_product_list' => $request->productList,
				'don_locality' => $request->locality,
				'don_rue' => $request->rue,
				'don_town' => $request->town,
				'don_country' => $request->country,
				'don_receiver_name' => $request->receiverName,
				'don_receiver_email' => $request->receiverEmail,
				'don_desc' => $request->desc,
				'don_state' => '0'
			]);
			$state = 'true';
    	} 
		return response()->json($request->productList[0], 200);
	}
	public function sendEmailToHealthPersonnel(Request $request) {
		$userValidator = DB::table('users')->where('user_id', $request->validator_id)->get();
		$prod = DB::table('product')->where('product_id', $request->product_id)->get();
		$provider = DB::table('users')->where('user_id', $prod[0]->user_id)->get();
		if ($userValidator != '[]') {
			sendmail($userValidator[0]->email, 'validateProduct');
		}
		
		return response()->json($provider, 200);
	}
	public function getProducts() {
		return response()->json(Product::get(), 200);
	}
	public function getUsers() {
		return response()->json(User::get(), 200);
	}
	public function test() {
		sendmail('fabricemvah@gmail.com', 'validateProduct'); 
		
		return 'success';
	}
}
