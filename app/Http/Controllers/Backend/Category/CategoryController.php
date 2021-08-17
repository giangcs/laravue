<?php

namespace App\Http\ControllersBackend\Category;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function listCategory(){
        $categories = Category::all();
        return view('backend.category.category', compact('categories'));
    }
}
