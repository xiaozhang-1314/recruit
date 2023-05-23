<template>
  <div class="my-input">
    <span class="left">{{laber}}:</span>
    <span class="right">
      <input :type="type" type="text" :value="value" @input="$emit('update:value', $event.target.value)">
    </span>
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    laber: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .my-input{
    height: 45px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
  }
  .my-input .left{
    margin-left: 10px;
    font-size: 14px;
    font-weight: 900;
  }
  .my-input .right{
    flex: 1;
    padding: 0 8px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .my-input .right input{
    width: 100%;
    font-size: 16px;
  }
</style>
