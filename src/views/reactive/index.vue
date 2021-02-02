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
      <a-row>{{ test4Stringfy }}</a-row>
      <a-input class="input" v-model:value="test4.label.txt"/><span>{{ test4.label.txt }}</span><br/>
      <a-input class="input" v-model:value="test4_1"/><span>{{ test4_1 }}</span>
    </a-card>
    <a-card title="toRefs" class="card" size="small">
      <a-input class="input" v-model:value="test5.a"/><span>{{ test5.a }}</span><br/>
      <a-input class="input" v-model:value="test5.b"/><span>{{ test5.b }}</span>
    </a-card>
    <a-card title="markRaw" class="card" size="small">
      <a-input class="input" v-model:value="test6"/><span>{{ test6 }}</span><br/>
      <a-row>{{ obj2Str(test6_1) }}</a-row>
      
      <a-input class="input" v-model:value="test6_1.label" />
    </a-card>
  </a-row>  
</template>
<script lang="ts">
import { computed, defineComponent, markRaw, reactive, readonly, ref, shallowReactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const obj2Str = (obj:Object) => JSON.stringify(obj).replace(/"/g, '');

    const test1 = reactive({ input: { value: 'test1' } })

    const test2 = readonly(reactive({value: 'test2'}))

    const test3 = shallowReactive({ input1: 'test3', input2: { value: 'test3.1' }})
    const test3Stringfy = computed(() => obj2Str(test3))

    const test4 = ref({ label: { txt: 'text4' } })
    const test4Stringfy = computed(() => obj2Str(test4.value))
    const test4_1 = ref('test4_1')

    const test5 = toRefs(reactive({test5: {a: 'test5_A', b: 'test5_b'}}))

    const test6 = toRefs(reactive({ test6: 'test6', test6_1: markRaw({ label:'test6_1', }) }))

    return {
      test1,
      test2,
      test3,
      test3Stringfy,
      test4,
      test4Stringfy,
      test4_1,
      ...test5,
      ...test6,
      obj2Str
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