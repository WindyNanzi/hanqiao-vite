const home = () => import('@/views/Home.vue')
const communication = () => import('@/views/communication/index.vue')
const form = () => import('@/views/form/index.vue')
const reactive = () => import('@/views/reactive/index.vue')

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
    label: '通讯',
    icon: 'icon-wifi',
  },
  {
    path: '/form',
    name: 'form',
    component: form,
    label: '表单',
    icon: 'icon-form',
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: reactive,
    label: '响应',
    icon: 'icon-react',
  },
]
