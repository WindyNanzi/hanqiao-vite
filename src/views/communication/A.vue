<template>
  <a-button
    @click="handleClick"
    style="margin-right: 10px"
    type="primary"
  >
    点我
  </a-button>
  <B /><B />
</template>
<script lang="ts">
import { defineComponent, inject, provide } from "vue";
import B from "./B.vue";
import mitt, { Emitter } from "mitt";

export default defineComponent({
  components: { B },
  setup() {
    //我觉得这种方式和 import { message } from ‘ant-design-vue' 区别不大，都需要在组件当中声明
    const message: any = inject("$message");
    const bus: Emitter = mitt();

    const handleClick = () => {
      message.destroy();
      message.success("父：这会触发子组件定义的事件");
      bus.emit("inc");
    };
    provide("bus", bus);

    return { handleClick };
  },
});
</script>
