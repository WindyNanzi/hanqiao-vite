<template>
  <input
    type="text"
    :value="currentValue"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>
<script lang="ts">
import mitt, { Emitter } from "mitt";
import { defineComponent, inject, ref } from "vue";

export default defineComponent({
  name: 'iInput',
  props: {
    value: {
      type: String,
      default: ''
    }
  },

  setup(props, { emit }){
    const bus = inject('bus') as Emitter || mitt()
    const currentValue = ref(props.value)

    const handleInput = (e: { target: HTMLInputElement }) => {
      const val = e.target.value
      currentValue.value = val
      emit('input', val)
      bus.emit('on-form-change', val)
    }

    const handleBlur = () => bus.emit('on-form-blur', currentValue.value)

    return { currentValue, handleInput, handleBlur }
  }

})
</script>