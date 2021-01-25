<template>
  <div>
    <label v-if="label" :class="[{'i-form-item-label-required':  isRequired }]">{{ label }}</label>
    <div>
      <slot />
      <div v-if="validateState === 'error'" class="i-form-item-message">{{ validateMessage }}</div>
    </div>
  </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue'
import { generateFormItem } from './form'
export default defineComponent({
  name: 'iFormItem',
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const { isRequired, validateState, validateMessage } = generateFormItem(props)
    return {
      isRequired,
      validateState,
      validateMessage
    }
    
  }
})
</script>
<style scoped>
.i-form-item-label-required::before{
  content: '*';
  color: red;
}
.i-form-item-message {
  color: red;
}
</style>