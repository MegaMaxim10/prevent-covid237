<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', 'API\UserController@login');
Route::post('register', 'API\UserController@register');
Route::group(['middleware' => 'auth:api'], function(){
	Route::post('details', 'API\UserController@details');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('saveProduct', 'Api\ApiController@saveProduct');
Route::post('loadProductImage', 'Api\ApiController@getUrlImage');
Route::post('makeDonation', 'Api\ApiController@makeDonation');
Route::post('sendEmailToHealthPersonnel', 'Api\ApiController@sendEmailToHealthPersonnel');
Route::get('images/{filename}', 'Api\ApiController@getImage');
Route::get('allProducts', 'Api\ApiController@getProducts');
Route::get('allUsers', 'Api\ApiController@getUsers');
Route::get('test', 'Api\ApiController@test');
