<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
//thu vien xu ly thoi gian
use Illuminate\Support\Carbon;
use App\Models\Order;

class AdminController extends Controller
{
    //
    public function index(){
        $now = Carbon::now();
        //Thống kê đến tháng hiện tại
        $current_month = $now->format('m'); //07
        $current_year = $now->format('Y');  //2020
        for($i=1; $i<=$current_month; $i++){
            $arr['Tháng 0'.$i] = Order::where('state',1)->whereMonth('updated_at',$i)->whereYear('updated_at',$current_year)->sum('total');
        }
        //Thống kê hết
        // for($i=1; $i<=12; $i++){
        //     $arr['Tháng'.$i] = $i;
        // }
        $data['chartData'] = $arr;
        // truyền 1 mảng, bên view gọi key của mảng truyền vào
        // dd($data);
        $data['totalOrder']=Order::where('state',2)->whereYear('updated_at',$current_year)->count();
        $data['currentMonth']=$current_month;
        return view('backend.index',$data);
    }
    public function logout(){
        Auth::logout();
        return redirect()->route('login');
    }
}
