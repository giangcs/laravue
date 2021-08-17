/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. 
 */
require('./bootstrap');
window.Vue = require('vue');
import router from './router'

/**
 * Vue components.
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('b-login', require('./components/backend/Login.vue').default);
Vue.component('b-home', require('./components/backend/Home.vue').default);
Vue.component('b-header', require('./components/backend/TheHeader.vue').default);
Vue.component('b-sidebar', require('./components/backend/TheSidebar.vue').default);
Vue.component('b-index', require('./components/backend/AdminIndex.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
