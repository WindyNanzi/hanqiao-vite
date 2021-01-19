import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import './index.css'
import 'ant-design-vue/dist/antd.css'
import router from './route/index'
import { initIconFont } from './icon'
import { message } from 'ant-design-vue'

const app = createApp(App)
app.use(Antd)
app.provide('$message', message)
app.use(router)
app.component('icon', initIconFont())
app.mount('#app')
