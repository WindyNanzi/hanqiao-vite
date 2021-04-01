<template>
  <a-button @click="handleClick">点我</a-button>
</template>
<script lang="ts">
  import { defineComponent } from '@vue/runtime-core'

  export default defineComponent({
    setup() {},
    methods: {
      handleClick() {
        this.$alert({ message: '哈哈哈哈哈' })
      }
    }
  })
</script>
