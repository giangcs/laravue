<?php 
function showError($errors, $name){
    if($errors->has($name)){
        return '<div class="alert alert-danger">'.$errors->first($name).'</div>';
    }
}
function getCategory($arr, $parent, $char, $id_selected){
    foreach($arr as $value){
        if($value['parent']==$parent){
            if($value['id']==$id_selected){
                echo '<option selected value="'.$value['id'].'">'.$char.$value['name'].'</option>';
        }else{
            echo '<option value="'.$value['id'].'">'.$char.$value['name'].'</option>';
        }
            getCategory($arr, $value['id'], $char.'---|', $id_selected);
        }
    }
}
function listCategory($arr, $parent, $char){
    foreach($arr as $value){
        if($value['parent']==$parent){
            echo '<div class="item-menu"><span>'.$char.$value['name'].'</span>
                    <div class="category-fix">
                        <a class="btn-category btn-primary" href="'.route('category.edit', ['id'=>$value['id']]).'"><i class="fa fa-edit"></i></a>
                        <a class="btn-category btn-danger" href="'.route('category.delete', ['id'=>$value['id']]).'"><i class="fas fa-times"></i></i></a>
                    </div>
                </div>';
            listCategory($arr, $value['id'], $char.'---|');
        }
    }
}
// function count_search($count, $request){
//     echo '<div style="font-size:20px; margin:5px" class="row row-pb-sm"><b>'.$count.'</b> kết quả với tìm kiếm <b>\''.$request.'\'</b></div>';
// }
?>