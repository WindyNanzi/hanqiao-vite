<template>
  <div class="massage-main" v-if="visible">
    <span class="message-content">{{ message }}</span>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from '@vue/runtime-core'

  export default defineComponent({
    name: 'message',
    props: {
      message: {
        type: String,
        default: ''
      },
      duration: {
        type: Number,
        default: 1500
      }
    },
    setup(props) {
      const { duration } = props
      const visible = ref(true)

      let timer: any = null

      function startTimer() {
        if (visible.value) {
          timer = setTimeout(close, duration)
        }
      }

      function close() {
        visible.value = false
        clearTimeout(timer)
        timer = null
      }

      onMounted(() => {
        startTimer()
      })

      return {
        visible
      }
    }
  })
</script>
<style scoped>
  .massage-main {
    position: fixed;
    left: 50%;
    z-index: 1;
    max-width: 100px;
    margin: 16px auto;
    box-sizing: border-box;
    background: deepskyblue;
    color: #fff;
    border-radius: 3px;
    padding: 6px 8px;
    opacity: 0.8;
    transition: all 0.5s;
  }
</style>
