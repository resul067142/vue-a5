import Vue from 'vue'
import VueRouter from 'vue-router'
import AnasayfaView from '../views/AnasayfaView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'anasayfa',
    component: AnasayfaView
  },
  {
    path: '/hakkimizda',
    name: 'hakkimizda',
    component: () => import('../views/HakkimizdaView.vue')
  },
  {
    path: '/turlar',
    name: 'turlar',
    component: () => import('../views/TurlarView.vue')
  },
  {
    path: '/galeri',
    name: 'galeri',
    component: () => import('../views/GaleriView.vue')
  },
  {
    path: '/iletisim',
    name: 'iletisim',
    component: () => import('../views/IletisimView.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
