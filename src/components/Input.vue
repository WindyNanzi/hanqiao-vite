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
import { defineComponent, inject, InputHTMLAttributes, ref } from "vue";

export default defineComponent({
  name: 'iInput',
  props: {
    value: {
      type: String,
      default: ''
    }
  },

  setup(props){
    const bus = inject('bus') as Emitter || mitt()
    const currentValue = ref(props.value)

    const handleInput = (e) => {
      const val = e.target.value
    }


    return { currentValue }
  }

})
</script>