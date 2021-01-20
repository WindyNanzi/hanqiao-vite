<template>
  <div>
    <i-form :model="form">
      <i-form-item label="woooo" prop="name"></i-form-item>
    </i-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import iForm from '../../components/form/form.vue'
import iFormItem from '../../components/form/form-item.vue'

export default defineComponent({
  components: { iForm, iFormItem },
  setup () {
    const data = reactive({
      form: {
        name: '',
        email: ''
      }
    })

    return {
      ...toRefs(data)
    }
  }
})
</script>