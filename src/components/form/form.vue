<template>
  <form>
    <slot></slot>
  </form>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { generateForm } from './form'

export default defineComponent({
  name: 'iForm',
  props: {
    model: {
      type: Object,
      default: () => {}
    },
    rules: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    const { resetFields, validate } = generateForm(props)
    return {
      resetFields,
      validate
    }
  }
})
</script>