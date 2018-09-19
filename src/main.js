import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(Router)

import Home from './components/Home.vue'
import ProfileComponent from './components/ProfileComponent.vue' 

var router= new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'ProfileComponent',
      component: ProfileComponent
    }
  ]
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')