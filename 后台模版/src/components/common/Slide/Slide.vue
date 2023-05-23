<template>
  <div class="slide-banner">
    <div class="banner-wrapper">
      <div class="slide-banner-wrapper" ref="slideRef">
        <div class="slide-banner-content">
          <div v-for="(num, i) in nums" class="slide-page" :key="i">
            <img :src="num" alt="">
          </div>
        </div>
      </div>
      <div class="dots-wrapper">
        <span
          class="dot"
          v-for="(num, i) in nums"
          :key="i"
          :class="{'active': currentPageIndex === i}"></span>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import { onMounted, onUnmounted, ref } from 'vue'

BScroll.use(Slide)
export default {
  name: 'Slide',
  props: {
    nums: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup() {
    const slideRef = ref(null)
    let slide = ref(null)
    let currentPageIndex = ref(0)

    onMounted(() => {
      slide.value = new BScroll(slideRef.value, {
        scrollX: true,
        scrollY: false,
        slide: {
          threshold: 100
        },
        momentum: false,
        bounce: false,
        stopPropagation: true
      })

      slide.value.on('slideWillChange', (page) => {
        currentPageIndex.value = page.pageX
      })
    })

    onUnmounted(() => {
      slide.value.destroy()
    })

    return {
      slideRef,
      currentPageIndex
    }
  }
}
</script>

<style scoped>
  .slide-banner .banner-wrapper{
    position: relative;
  }
  .slide-banner .slide-banner-wrapper{
    min-height: 1px;
    overflow: hidden;
  }
  .slide-banner .slide-banner-content{
    white-space: nowrap;
    font-size: 0;
  }
  .slide-banner .slide-page{
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 26px;
  }
  .slide-banner .slide-page img{
    width: 100%;
    height: 210px;
  }
  .slide-banner .dots-wrapper{
    position: absolute;
    bottom: 11px;
    left: 50%;
    transform: translateX(-50%);
  }
  .slide-banner .dot{
    display: inline-block;
    margin: 0 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #ccc;
  }
  .slide-banner .dot.active{
    width: 20px;
    border-radius: 5px;
  }
</style>
