<template>
  <a-badge :count="count" />
</template>
<script lang="ts">
import { Emitter } from "mitt";
import { defineComponent, inject, ref } from "vue";
import { message } from "ant-design-vue";

export default defineComponent({
  setup(prop, ctx) {
    let count = ref(1);
    const bus: Emitter = inject("bus") as Emitter;
    bus.on("inc", () => {
      count.value++;
      message.info("嘿嘿嘿");
    });
    return { count };
  },
});
</script>
