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
        // Product
    // Route::group(['prefix' => 'product', 'namespace' => 'Product'], function () {
    //     Route::get('/', 'ProductController@listproduct')->name('product.index');
    //     Route::get('/add', 'ProductController@addproduct')->name('product.add');
    //     Route::post('/store', 'ProductController@store')->name('product.store');
    //     Route::get('/edit/{id}', 'ProductController@editproduct')->name('product.edit');
    //     Route::post('/update/{id}', 'ProductController@update')->name('product.update');
    //     Route::get('/delete/{id}', 'ProductController@delete')->name('product.delete');
    //     Route::get('/search', 'ProductController@search')->name('product.find');
    // });
            // Category
        Route::group(['prefix' => 'category', 'namespace' => 'Category'], function () {
            Route::get('/', 'CategoryController@index')->name('category.index');
            Route::post('create', 'CategoryController@create')->name('category.create');
        Route::get('edit/{id}', 'CategoryController@edit')->name('category.edit');
        Route::post('update/{id}', 'CategoryController@update')->name('category.update');
        Route::get('delete/{id}', 'CategoryController@delete')->name('category.delete');
        });
        

   
    // Order
    // Route::group(['prefix' => 'orders', 'namespace' => 'Order'], function () {
    //     Route::get('/', 'OrderController@orders')->name('order.index');
    //     Route::get('/detail/{id}', 'OrderController@ordersdetail')->name('order.detail');
    //     Route::get('/approve/{id}', 'OrderController@approve')->name('order.approve');
    //     Route::get('/process', 'OrderController@process')->name('order.process');
    //     Route::get('/search', 'OrderController@search')->name('order.find');

    // });

    // User
    // Route::group(['prefix' => 'user', 'namespace' => 'User'], function () {
    //     Route::get('', 'UserController@listuser')->name('user.index');
    //     Route::get('add', 'UserController@adduser')->name('user.add');
    //     Route::post('store', 'UserController@store')->name('user.store');
    //     Route::get('edit/{id}', 'UserController@edituser')->name('user.edit');
    //     Route::post('update/{id}', 'UserController@update')->name('user.update');
    //     Route::get('delete/{id}', 'UserController@delete')->name('user.delete');
    //     Route::get('/search', 'UserController@search')->name('user.find');
    // });
    });
    // API routes
    Route::get('/api/categories', 'Api\CategoryApiController@getAll');
