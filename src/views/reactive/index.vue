<template>
  <a-row type='flex'>
    <a-card title="reactive" class="card" size="small">
      <a-input class="test1" v-model:value="test1.input.value" /><span> {{ test1.input.value }} </span>
    </a-card>
    <a-card title="readonly" class="card" size="small">
      <a-input v-model:value="test2.value"/>
    </a-card>
  </a-row>  
</template>
<script lang="ts">
import { defineComponent, markRaw, reactive, readonly } from "vue";

export default defineComponent({
  setup() {
    const test1 = reactive({ input: { value: 'test1' } })

    const test2 = readonly(reactive({value: 'test2'}))

    const obj = { ooo: 'oooo' }
    console.log(markRaw(obj))

    return {
      test1,
      test2
    }
  }
})
</script>
<style scoped>
.card { width: 300px; margin:0 20px 20px 0; border-radius: 4px; }
.test1 {
  position: relative;
  width: 100px;
}
</style>