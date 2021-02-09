import { createRouter, createWebHashHistory } from 'vue-router'
import menus from './menu'

const index = () => import('@/index.vue')

const routers = [
  {
    path: '/',
    redirect: '/home',
    component: index,
    children: menus.map(({ path, name, component }) => ({
      path,
      name,
      component,
    })),
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes: routers,
})
