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
import LoginComponent from './components/LoginComponent.vue'
import MapComponent from './components/MapComponent.vue'


var router = new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'ProfileComponent',
      component: ProfileComponent,
      withLog: true
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent,
      withLog: "true"
    },
    {
      path: '/map',
      name: 'map',
      component: MapComponent,
      withLog: true
    }
  ]
})
let tempStore = true;

let protectedPath = ['map'];
router.beforeEach((to, from, next) => {
  console.warn("before.each.", to.name, protectedPath, tempStore, protectedPath.includes('map'))
  next()
  if (tempStore && protectedPath.includes(to.name)) {
    next('/');
  } else {
    next();
  }
});


new Vue({
  router,

  render: h => h(App)
}).$mount('#app')