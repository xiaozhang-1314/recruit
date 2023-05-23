<template>
  <div class="wrapper" ref="bsRef">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll  from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
BScroll.use(ObserveDOM)

import { onMounted, onUnmounted, ref } from 'vue'

export default {
  name: 'BS',
  setup(props) {
    const bsRef = ref(null)
    let scroll = ref(null)

    onMounted(() => {
      scroll.value = new BScroll(bsRef.value, {
        ...props,
        click: true,
        observeDOM: true
      })
    })

    onUnmounted(() => {
      scroll.value.destroy()
    })

    const refresh = () => {
      scroll.value.refresh()
    }

    return {
      bsRef,
      scroll,
      refresh
    }
  }
}
</script>

<style scoped>
  .wrapper{
    width: 100%;
    overflow: hidden;
  }
</style>
