<?php

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->delete();
        DB::table('categories')->insert([
            ['id'=>1, 'name'=>'Áo nam', 'slug'=>'ao-nam', 'parent'=>0],
            ['id'=>2, 'name'=>'Áo nữ', 'slug'=>'ao-nu', 'parent'=>0],
            ['id'=>3, 'name'=>'Áo phông nam', 'slug'=>'ao-nam', 'parent'=>1],
            ['id'=>4, 'name'=>'Áo phông nữ', 'slug'=>'ao-nu', 'parent'=>2],
            ['id'=>5, 'name'=>'Áo sơ mi nam', 'slug'=>'ao-so-mi-nam', 'parent'=>1],
            ['id'=>6, 'name'=>'Áo sơ mi nữ', 'slug'=>'ao-so-mi-nu', 'parent'=>2],
            ['id'=>7, 'name'=>'Quần nam', 'slug'=>'quan-nam', 'parent'=>0],
            ['id'=>8, 'name'=>'Quần nữ', 'slug'=>'quan-nu', 'parent'=>0],
            ['id'=>9, 'name'=>'Quần ngố', 'slug'=>'quan-ngo', 'parent'=>7],
            ['id'=>10, 'name'=>'Quần kaki nam', 'slug'=>'quan-kaki-nam', 'parent'=>7],
           
        ]);
    }
}
