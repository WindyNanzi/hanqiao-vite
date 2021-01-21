<template>
  <div>
    <i-form :model="form" ref="form">
      <i-form-item label="woooo" prop="name"></i-form-item>
    </i-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
import { IFormFunc } from '../../components/form/form'
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

    onMounted(() => {
      const form = ref()
      debugger
      form.value?.validate()
    })

    return {
      ...toRefs(data)
    }
  }
})
</script>