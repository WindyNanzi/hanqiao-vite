<template>
  <a-row type='flex'>
    <a-card title="reactive" class="card" size="small">
      <a-input class="input" v-model:value="test1.input.value" /><span> {{ test1.input.value }} </span>
    </a-card>
    <a-card title="readonly" class="card" size="small">
      <a-input v-model:value="test2.value"/>
    </a-card>
    <a-card title="shallowReactive" class="card" size="small">
      <a-row>{{ test3Stringfy }}</a-row>
      <a-input class="input" v-model:value="test3.input1"  style="margin-right: 10px;"/>
      <a-input class="input" v-model:value="test3.input2.value" />
    </a-card>
    <a-card title="ref" class="card" size="small">
      <a-input class="input" v-model:value="test4.label.txt"/><span>{{ test4.label.txt }}</span><br/>
      <a-input class="input" v-model:value="test4_1"/><span>{{ test4_1 }}</span>
    </a-card>
    <a-card title="toRefs" class="card" size="small">
      <a-input class="input" v-model:value="test5.a"/><span>{{ test5.a }}</span><br/>
      <a-input class="input" v-model:value="test5.b"/><span>{{ test5.b }}</span>
    </a-card>
  </a-row>  
</template>
<script lang="ts">
import { computed, defineComponent, reactive, readonly, ref, shallowReactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const test1 = reactive({ input: { value: 'test1' } })

    const test2 = readonly(reactive({value: 'test2'}))

    const test3 = shallowReactive({ input1: 'test3', input2: { value: 'test3.1' }})
    const test3Stringfy = computed(() => JSON.stringify(test3).replace(/"/g, ''))

    const test4 = ref({ label: { txt: 'text4' } })
    const test4_1 = ref('test4_1')

    const test5 = toRefs(reactive({test5: {a: 'test5_A', b: 'test5_b'}}))

    return {
      test1,
      test2,
      test3,
      test3Stringfy,
      test4,
      test4_1,
      ...test5
    }
  }
})
</script>
<style scoped>
.card { width: 300px; margin:0 20px 20px 0; border-radius: 4px; }
.input {
  position: relative;
  width: 100px;
}
</style>