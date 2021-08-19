<template>
  <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
    <div class="row">
      <ol class="breadcrumb">
        <li>
          <a href="#"
            ><svg class="glyph stroked home">
              <use xlink:href="#stroked-home"></use></svg
          ></a>
        </li>
        <li class="active">Danh mục</li>
      </ol>
    </div>
    <!--/.row-->

    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">Quản lý danh mục</h1>
      </div>
    </div>
    <!--/.row-->
    <div class="row">
      <div class="col-md-12">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="row">
              <div class="col-md-5">
                <!-- <form action="" method="post">  -->
                <!-- <form action="{{ route('category.create') }}" method="post"> -->
                <!-- @csrf -->
                <div class="form-group">
                  <label for="">Danh mục cha:</label>
                  <select class="form-control" name="parent" id="">
                    <option value="0">----ROOT----</option>
                    <!-- <option v-bind:value="category.id" v-for="category in categories" :key="category.id">{{category.name}}</option> -->
                    <option v-bind:value="item.id" v-for="item in this.rootData.children" :key="item.id" >{{item.name}}</option>

                    <!-- {!! getCategory($categories, 0, '',0) !!} -->
                  </select>
                </div>

                <div class="form-group">
                  <label for="">Tên Danh mục</label>
                  <!-- <input type="text" class="form-control" name="name" id="" placeholder="Tên danh mục mới" value="{{ old('name') }}"> -->
                  <input type="text" class="form-control" name="name" id=""  placeholder="Tên danh mục mới" value="" />

                  <!-- {!! showError($errors,'name') !!}
									{{-- @if ($errors->has('parent'))
										<div class="alert bg-danger" role="alert">
										<svg class="glyph stroked cancel">
											<use xlink:href="#stroked-cancel"></use>
										</svg>{{ $errors->first('parent') }}<a href="" class="pull-right"><span class="glyphicon glyphicon-remove"></span></a>
										</div>
									@endif --}} -->
                </div>
                <button type="submit" class="btn btn-primary">
                  Thêm danh mục
                </button>
                <!-- </form> -->
              </div>
              <div class="col-md-7">
                <!-- @if (session('success'))
									<div class="alert bg-success" role="alert">
									<svg class="glyph stroked checkmark">
										<use xlink:href="#stroked-checkmark"></use>
									</svg> {{ session('success') }} <a href="" class="pull-right"><span class="glyphicon glyphicon-remove"></span></a>
									</div>
								@endif -->

                <h3 style="margin: 0"><strong>Phân cấp Menu</strong></h3>
                <div class="vertical-menu">
                  <div class="item-menu active">Danh mục</div>
                  <!-- {!! listCategory($categories, 0, '') !!} -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--/.col-->
    </div>
    <!--/.row-->
  </div>
  <!--/.main-->
</template>
<script>
export default {
    data(){
        return{
            loading:true,
            categories:null,
            rootData:{
                name: '/',
                children:[
                    {
                        id: 1,
                        name:'music',
                        children:[
                            {
                                id: 2,
                                name:'song.mp3'
                            }
                        ]
                    },
                    {
                        id: 3,
                        name:'workspace',
                        children:[
                            {
                                id: 4,
                                name:'source.js'
                            }
                        ]
                    }
                ]
            }
        }
    },
    mounted() {
        this.loadPage()
    },
    methods:{
        loadPage(){
            this.loading=true
            axios.get('/api/categories')
                .then(response => {
                    this.loading=false
                    this.categories = response.data
                    console.log(response.data)
            // I need this data here ^^
            // return response.data;
        })
                .catch(err => {
                    this.loading = false
                    // if (err.response.data.error) {
                    //     this.error = err.response.data.error.message
                    // } else {
                    //     this.error = err.message
                    // }
                })
        },
    }
}
</script>