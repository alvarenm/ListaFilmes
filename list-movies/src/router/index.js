import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/home/:id',
    name: 'home',
    component: () => import (/* webpackChunkName: "home" */'../views/Home.vue')
  },
  {
    path: '/lista/:id',
    name: 'lista',
    component: () => import(/* webpackChunkName: "lista" */'../views/ListaFilmes.vue')
  },
  {
    path: '/assistidos/:id',
    name: 'assistidos',
    component: () => import(/* webpackChunkName: "assistidos" */'../views/ListaAssistidos.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
