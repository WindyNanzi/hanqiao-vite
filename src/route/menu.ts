const home = () => import('../views/Home.vue')

export default [
  {
    path: '/home',
    name: 'home',
    component: home,
    label: '首页',
    icon: 'icon-home',
  },
]
