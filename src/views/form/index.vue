<template>
  <div>
    <i-form :model="form" ref="formRef" :rules="rules">
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
import { defineComponent, getCurrentInstance, onMounted, ref, computed, reactive, toRefs } from 'vue'
import { IFormFunc } from '../../components/form/form'
import iForm from '../../components/form/form.vue'
import iFormItem from '../../components/form/form-item.vue'
import iInput from '../../components/Input.vue'

export default defineComponent({
  components: { iForm, iFormItem, iInput },
  setup () {
    const ctx = getCurrentInstance()
    const formRef = ref(null) as any

    const data = reactive({
      form:{
        name: 'w',
        email: 'a'
      }
    })

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
      const form = ctx?.refs['formRef'] as IFormFunc //这是获取 子组件对象的一种方式
      console.log(formRef) //这是获取 子组件对象的另一种方式
      console.log(form)
      form.validate()
    })

    return {
      ...toRefs(data),
      rules,
      formRef
    }
  }
})
</script>