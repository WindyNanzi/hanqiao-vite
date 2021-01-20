<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h1>{{ msg }}</h1>
  <a-button @click="add">count is: {{ count }}</a-button>
  <p>computedCount: {{ computedCount }}</p>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const count = ref(0);

    onMounted(() => {
      count.value = 1;
    });

    function add() {
      count.value++;
    }
    const computedCount = computed(() => {
      return (count.value + 1) * 2 - 1;
    });

    return { count, add, computedCount };
  },
});
</script>
