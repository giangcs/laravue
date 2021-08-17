<?php

use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});

// BackEnd
Route::get('/login', 'Backend\Auth\LoginController@login')->name('login');
Route::post('/login', 'Backend\Auth\LoginController@postLogin');
Route::group(['prefix' => 'admin', 'namespace' => 'Backend'], function () {
        Route::get('/', 'AdminController@index')->name('admin.index');
            // Category
        Route::group(['prefix' => 'category', 'namespace' => 'Category'], function () {
            Route::get('/', 'CategoryController@listCategory')->name('category.index');
            
        });
    });
