<template>
  <div class="key-code">
    <input type="text" placeholder="请输入" v-model="msg">
    <span class="smile" @click="showExpression">😊</span>
    <span class="send" @click="sendMsg">发送</span>
    <ul class="expression" v-show="isShow">
      <li v-for="(item, i) in expression" :key="i" @click="chooseExp(i)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { ref } from '@vue/reactivity'

export default {
  name: 'KeyCode',
  setup(props, { emit }) {
    const expression = ['😂','😘','😍','🤣','😃','😄','😅','😆','😎','😍','🤣','😃','😄','😅','😆','😎','😍','🤣','😃','😄','😅','😆','😎','😍','🤣','😃','😄','😅','😆','😎']
    const store = useStore()
    let isShow = ref(false)
    let msg = ref('')

    const showExpression = () => {
      isShow.value = !isShow.value
    }

    const chooseExp = (i) => {
      msg.value += expression[i]
      isShow.value = false
    }

    const sendMsg = () => {
      emit('success', msg.value)
      msg.value = ''
    }

    return {
      expression,
      isShow,
      showExpression,
      chooseExp,
      msg,
      sendMsg
    }
  }
}
</script>

<style scoped>
  .key-code{
    height: 40px;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    box-sizing: border-box;
    position: relative;
  }
  .key-code input{
    padding: 0 5px;
    flex: 1;
    height: 20px;
    padding: 5px 10px 5px 0;
  }
  .key-code input::placeholder{
    font-size: 14px;
    color: #999;
  }
  .key-code .smile{
    padding-left: 5px;
    font-size: 13px;
    border-left: 1px solid #ccc;
  }
  .key-code .send{
    font-size: 13px;
    color: #888;
    margin-left: 5px;
  }
  .key-code .expression{
    position: absolute;
    left: 0;
    top: -81px;
    display: flex;
    background-color: #fff;
    flex-wrap: wrap;
  }
  .key-code .expression li{
    width: 10%;
    padding: 5px;
    text-align: center;
    box-sizing: border-box;
  }
</style>
