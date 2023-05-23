<template>
  <div class="nav-bar">
    <div class="left item">
      <slot name="left"></slot>
    </div>
    <div class="center item">
      <slot name="center"></slot>
    </div>
    <div class="right item">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
  .nav-bar{
    height: 44px;
    display: flex;
    align-items: center;
  }
  .nav-bar .item{
    height: 100%;
    line-height: 44px;
    text-align: center;
  }
  .nav-bar .left{
    width: 100px;
  }
  .nav-bar .center{
    flex: 1;
  }
  .nav-bar .right{
    width: 100px;
  }
</style>
