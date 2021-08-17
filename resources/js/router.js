import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [
      {
        name:'admin',
        path: "/",
        component: () => import("../js/components/backend/Home"),
      },
      // {
      //   name: 'login',
      //   path: '/login',
      //   component: () => import('../js/components/backend/Login')        // lazy loading route
      // },
      
      {
        name:'product',
        path: "/product",
        component: () => import("../js/components/backend/ProductList"),
      },
      {
        name:'category',
        path: "/category",
        component: () => import("../js/components/backend/CategoryList"),
      },
    ]
  })
