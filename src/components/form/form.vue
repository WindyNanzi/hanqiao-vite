<template>
  <form>
    <slot></slot>
  </form>
</template>
<script lang="ts">
import mitt from "mitt";
import { defineComponent, onMounted, provide, reactive } from "vue";

export default defineComponent({
  name: 'iForm',
  props: {
    model: {
      type: Object,
      default: () => {}
    },
    rules: {
      type: Array,
      default: () => []
    }
  },
  setup(prop) {
    const bus = mitt()
    provide('bus', bus)

    const items: any[] = []
    bus.on('on-form-item-add', (item) => items.push(item))
    bus.on('on-form-item-remove', (item)=> items.splice(items.indexOf(item), 1))
    onMounted(() => console.log(items))
  }
})
</script>