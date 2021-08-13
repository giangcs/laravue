<?php

namespace App\Http\Controllers\Backend\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
// use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    //
    public function login(){
        return view('backend.login');
    }
    public function postLogin(Request $request){
        // return redirect()->route('admin.index');
        return view('backend.index');
        
    }
}
