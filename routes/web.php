<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('menu');
});
Route::get('/game','MenuController@game');
Route::get('/info','MenuController@info');
Route::get('/info1','MenuController@info1');
Route::get('/info2','MenuController@info2');
Route::get('/info3','MenuController@info3');
