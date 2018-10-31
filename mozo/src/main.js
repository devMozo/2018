// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import App from './App'
import NewUserScreen from '@/screens/NewUserScreen.vue'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'home', component: App },
  { path: '/new', name: 'new', component: NewUserScreen }
]

Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
