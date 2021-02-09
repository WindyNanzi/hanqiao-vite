<template>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import { defineComponent } from "vue";
import HelloWorld from "comps/HelloWorld.vue";
export default defineComponent({
  name: "home",
  components: { HelloWorld },
});
</script>
