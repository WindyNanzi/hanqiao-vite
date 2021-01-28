<template>
  <a-row type='flex'>
    <a-card title="reactive" class="card" size="small">
      <a-input class="test1" v-model:value="test1.input.value" /><span> {{ test1.input.value }} </span>
    </a-card>
    <a-card title="readonly" class="card" size="small">
      <a-input v-model:value="test2.value"/>
    </a-card>
    <a-card title="shallowReactive" class="card" size="small">
      <a-row>{{ test3Stringfy }}</a-row>
      <a-input class="test1" v-model:value="test3.input1"  style="margin-right: 10px;"/>
      <a-input class="test1" v-model:value="test3.input2.value" />
    </a-card>
  </a-row>  
</template>
<script lang="ts">
import { computed, defineComponent, reactive, readonly, shallowReactive } from "vue";

export default defineComponent({
  setup() {
    const test1 = reactive({ input: { value: 'test1' } })

    const test2 = readonly(reactive({value: 'test2'}))

    const test3 = shallowReactive({ input1: 'test3', input2: { value: 'test3.1' }})
    const test3Stringfy = computed(() => JSON.stringify(test3).replace(/"/g, ''))

    return {
      test1,
      test2,
      test3,
      test3Stringfy
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