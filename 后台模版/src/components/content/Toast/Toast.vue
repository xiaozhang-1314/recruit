<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Toast'
}
</script>

<style scoped>
  .toast{
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 40%;
    padding: 8px 10px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
    line-height: 1.5;
    text-align: center;
  }
</style>
