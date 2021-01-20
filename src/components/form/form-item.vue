<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { Emitter } from "mitt";
import { defineComponent, inject, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: 'iFormItem',
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String || undefined,
      default: undefined
    }
  },
  setup(props) {
    const bus = inject('bus') as Emitter
    const symbol = Symbol()

    if(props.prop) {
      bus.emit('on-form-item-add', symbol)
      onUnmounted(() => bus.emit('on-form-item-add', symbol))
    }
  }
})
</script>