import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView'
import AdministracionView from '../views/AdministracionView'
import OpinionesView from '../views/OpinionesView'
import NotFoundView from '../views/NotFoundView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/administracion',
    name: 'AdministracionView',
    component: AdministracionView
  },
  {
    path: '/opiniones',
    name: 'OpinionesView',
    component: OpinionesView
  },
  {
    path: '/administracion/:id',
    name: 'EditionView',
    props: true,
    component: () => import('../views/EditionView.vue')
  },
  {
    path: '*',
    component: NotFoundView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
