import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
