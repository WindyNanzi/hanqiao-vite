<template>
  <input
    type="text"
    :value="currentValue"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>
<script lang="ts">
import { Emitter } from "mitt";
import { defineComponent, inject,  ref } from "vue";

export default defineComponent({
  name: 'iInput',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },

  setup(props, { emit }){
    const bus = inject('form-item-bus') as Emitter || { emit: () => {} }
    const currentValue = ref(props.modelValue)

    const handleInput = (e: { target: HTMLInputElement }) => {
      const val = e.target.value
      currentValue.value = val
      emit('input', val)
      emit('update:modelValue', val)
      bus.emit('on-form-change', val)
    }

    const handleBlur = () => bus.emit('on-form-blur', currentValue.value)

    return { currentValue, handleInput, handleBlur }
  }

})
</script>