<template>
    <a-card title="Vue-2">
        <A/>
    </a-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import A from './A.vue'

export default defineComponent({
    components: { A }
})
</script>