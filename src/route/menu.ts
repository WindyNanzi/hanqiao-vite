const home = () => import('../views/Home.vue')
const communication = () => import('../views/communication/index.vue')

export default [
  {
    path: '/home',
    name: 'home',
    component: home,
    label: '首页',
    icon: 'icon-home',
  },
  {
    path: '/communication',
    name: 'communication',
    component: communication,
    label: '事件通讯',
    icon: 'icon-wifi',
  },
]
