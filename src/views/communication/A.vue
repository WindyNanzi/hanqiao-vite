<template>
    <a-button @click="handleClick">点我</a-button>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue"

export default defineComponent({
    setup() {
        //我觉得这种方式和 import { message } from ‘ant-design-vue' 区别不大，都需要在组件当中声明
        const message:any  = inject('$message'); 
        const handleClick = () => message.success('wooooooooooo')

        return { handleClick }
    }
})

</script>