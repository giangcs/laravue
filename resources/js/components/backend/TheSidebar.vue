<template>
    <!-- sidebar left-->
	<div id="sidebar-collapse" class="col-sm-3 col-lg-2 sidebar">
		<form role="search" >
		</form >
               		<ul class="nav menu">
			<li ><router-link  to="/"  ><svg class="glyph stroked dashboard-dial"><use xlink:href="#stroked-dashboard-dial"></use></svg> Tổng quan</router-link></li>
			<li><router-link  to="/category" ><svg class="glyph stroked clipboard with paper"><use xlink:href="#stroked-clipboard-with-paper" /></svg> Danh Mục</router-link></li>
			<li><router-link  to="/product" ><svg class="glyph stroked bag"><use xlink:href="#stroked-bag"></use></svg> Sản phẩm</router-link></li>
			<li><a href="order.html"><svg class="glyph stroked notepad "><use xlink:href="#stroked-notepad" /></svg> Đơn hàng</a></li>
			<li role="presentation" class="divider"></li>
			<li><a href="listuser.html"><svg class="glyph stroked male-user"><use xlink:href="#stroked-male-user"></use></svg> Quản lý thành viên</a></li>
		</ul>
		
	</div>
	<!--/. end sidebar left-->
</template>
<script>
export default {
    name: 'TheSidebar',
}
</script>
<style scoped>
a.router-link-exact-active{
	background-color:#e8e8e8
}
</style>