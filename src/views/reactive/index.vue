<template>
  <a-row type='flex'>
    <a-card title="reactive" class="card" size="small">
      <a-row class="code-content">
        <a-row class="code">const test1 = reactive({ input: { value: ' {{ test1.input.value }} ' } })</a-row>
      </a-row>
      <a-input class="input" v-model:value="test1.input.value" /><span></span>
    </a-card>
    <a-card title="readonly" class="card" size="small">
      <a-row class="code-content">
        <a-row class="code">const test2 = readonly(reactive({value: 'test2'}))</a-row>
      </a-row>
      <a-input v-model:value="test2.value"/>
    </a-card>
    <a-card title="shallowReactive" class="card" size="small">
      <a-row class="code-content">
        <a-row class="code">const test3 = shallowReactive({ input1: '{{test3.input1}}', input2: { value: '{{test3.input2.value}}' }})</a-row>
      </a-row>
      <a-input class="input" v-model:value="test3.input1"  style="margin-right: 10px;"/>
      <a-input class="input" v-model:value="test3.input2.value" />
    </a-card>
    <a-card title="ref" class="card" size="small">
      <a-row class="code-content">
        <a-row class="code">const test4 = ref({ label: { txt: '{{ test4.label.txt }}' } })</a-row>
        <a-row class="code">const test4_1 = ref('{{test4_1}}')</a-row>
      </a-row>
      <a-input class="input" v-model:value="test4.label.txt"/><span></span><br/>
      <a-input class="input" v-model:value="test4_1"/><span></span>
    </a-card>
    <a-card title="toRefs" class="card" size="small">
      <a-row class="code-content">
        <a-row class="code">const test5 = toRefs(reactive({test5: {a: '{{ test5.a }}', b: '{{ test5.b }}'}))</a-row>
      </a-row>
      <a-input class="input" v-model:value="test5.a"/><span></span><br/>
      <a-input class="input" v-model:value="test5.b"/><span></span>
    </a-card>
    <a-card title="markRaw" class="card" size="small">
      <a-row class="code-content">
        <a-row class="code">const test6 = toRefs(reactive({ test6: '{{ test6 }}', test6_1: markRaw({ label:'test6_1', }) }))</a-row>
      </a-row>
      <a-input class="input" v-model:value="test6"/><span></span><br/>
      
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

    const test4 = ref({ label: { txt: 'text4' } })
    const test4_1 = ref('test4_1')

    const test5 = toRefs(reactive({test5: {a: 'test5_A', b: 'test5_b'}}))

    const test6 = toRefs(reactive({ test6: 'test6', test6_1: markRaw({ label:'test6_1', }) }))

    return {
      test1,
      test2,
      test3,
      test4,
      test4_1,
      ...test5,
      ...test6,
      obj2Str
    }
  }
})
</script>
<style scoped>
.card { width: 550px; margin:0 20px 20px 0; border-radius: 4px; }
.code-content { 
  background: #000; 
  border-radius: 4px;
  padding: 2px 4px; 
  margin-bottom: 4px;
  flex-direction: column;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.code { 
  font-size: 12px;
  font-weight: bold;
  color: turquoise;
  display: block;
  text-align: left;
  -webkit-user-select: text;
}
.input {
  position: relative;
  width: 100px;
}
</style>