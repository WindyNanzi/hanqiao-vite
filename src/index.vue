<template>
    <a-layout style="height: 100vh">
        <a-layout-sider collapsible :trigger='null' :collapsed='collapsed'>
            <a-layout-header style="padding: 0">
                <a-row type='flex' justify='center' align='middle' style='height: 100%; font-size:32px'>
                    <icon type='icon-Vue' />
                </a-row>
            </a-layout-header>
            <a-menu theme='dark' mode='inline' :selectedKeys='selectedKeys' @select="handleSelect">
                <a-menu-item
                    v-for="({ path, name, label, icon }) in menus"
                    :key='name'
                >   
                    <router-link :to="path">
                        <icon :type='icon' class="icon"/>
                        <span>{{label}}</span>
                    </router-link>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; text-align: left; padding: 0 20px">
                <span  style="font-size: 24px;">
                    <icon :type='collapsed ? "icon-indent": "icon-outdent"' @click="() => (collapsed = !collapsed)"/>
                </span>
            </a-layout-header>
            <a-layout-content style="padding: 20px">
                <router-view />
            </a-layout-content>
        </a-layout>
    </a-layout>

</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs, RendererElement } from "vue"
import { useRoute } from "vue-router"
import menus from './route/menu'

export default defineComponent({
    setup () {
        const data = reactive({
            collapsed: false,
            selectedKeys: [useRoute().name]
        })

        const handleSelect = ({ item, key, selectedKeys }:{ item: any, key: string, selectedKeys: string[] }) => data.selectedKeys = selectedKeys
        
        return {
            ...toRefs(data),
            menus,
            handleSelect
        }
    }
})
</script>
<style scoped>
.icon { font-size: 16px; }
</style>