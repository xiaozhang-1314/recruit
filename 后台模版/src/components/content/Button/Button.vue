<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style scoped>
  .btn{
    width: 100%;
    height: 45px;
    background-color: rgb(13, 148, 148);
    color: #fff;
    border-radius: 5px;
    font-size: 16px;
  }
</style>
