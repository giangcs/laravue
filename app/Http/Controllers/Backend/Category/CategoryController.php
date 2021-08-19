<?php

namespace App\Http\Controllers\Backend\Category;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Str;

class CategoryController extends Controller
{
    public function index(){
        // $categories = Category::all();
        // return view('backend.category.index-category', compact('categories'));
        return view('backend.category.index-category');
    }
    public function create(Request $request){
        $category = new Category();
        $category->name = $request->name;
        $category->parent = $request->parent;
        $category->slug = Str::slug($request->name,'-');
        // dd($request->all());
        $category->save();
        return redirect()->back()->with('success', 'Đã sửa danh mục thành công!');
    }
    public function edit($id){
        $categories = Category::all();
        $category = Category::find($id);
        return view('backend.category.edit-category', compact('categories','category'));
    }
    public function update(Request $request, $id){
        $category = Category::find($id);

        $category->name = $request->name;
        $category->parent = $request->parent;
        $category->slug = Str::slug($request->name,'-');
        // dd($request->all());
        $category->save();

        return redirect()->back()->with('success', 'Đã sửa danh mục thành công!');
    }
    
    public function delete($id){
        $category = Category::find($id);
        $categories = Category::all();
        $category->delete();
        return redirect()->back()->with('success', 'Đã xóa danh mục thành công!');
    }

        
}
