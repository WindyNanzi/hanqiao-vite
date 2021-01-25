<template>
  <div>
    <i-form :model="form" ref="form" :rules="rules">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="form.name" />
      </i-form-item>
      <i-form-item label="邮箱" prop="email">
        <i-input v-model="form.email" />
      </i-form-item>
    </i-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, ref, computed } from 'vue'
import { IFormFunc } from '../../components/form/form'
import iForm from '../../components/form/form.vue'
import iFormItem from '../../components/form/form-item.vue'
import iInput from '../../components/Input.vue'

export default defineComponent({
  components: { iForm, iFormItem, iInput },
  setup () {
    const ctx = getCurrentInstance()
    const name = ref('')
    const email = ref('')

    const form = computed(() => ({ name, email }))

    const rules = {
      name: [
        { required: true, message: '用户名不能为空', trigger: 'blur' }
      ],
      email: [
        { required: true, message: '邮箱不能为空', trigger: 'blur' },
        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
      ],
    }

    onMounted(() => {
      const form = ctx?.refs['form'] as IFormFunc
    })

    return {
      form,
      rules,
      name,
      email
    }
  }
})
</script>