<template>
  <div class="chat-item">
    <div class="chat-item-left">
      <div class="chat-item-top">
        <div class="left">发送方：{{sendName}}</div>
        <div class="right">接收方：{{receiveName}}</div>
      </div>
      <div class="chat-item-bottom">内容：{{chat.content}}</div>
    </div>
    <button class="chat-item-right" @click="remove">删除</button>
  </div>
</template>

<script>
import { removeChat } from 'api'

import { computed } from 'vue'
export default {
  name: 'ChatItem',
  props: {
    users: {
      type: Object,
      default() {
        return {}
      }
    },
    chat: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup(props, {emit}) {

    const receiveName = computed(() => {
      return props.users.users[props.chat.to]?.username
    })

    const sendName = computed(() => {
      return props.users.users[props.chat.from]?.username
    })
    
    const remove = async () => {
      const res = await removeChat({_id: props.chat._id})
      if(res.meta.code === 0) {
        emit('removeSuccess', props.chat._id)
      }
    }

    return {
      sendName,
      receiveName,
      remove
    }
  }
}
</script>

<style scoped>
  .chat-item{
    margin-bottom: 10px;
    padding: 10px;
    background-color: #fff;
    color: #999;
    font-size: 13px;
    border-radius: 5px;
    display: flex;
    align-items: center;
  }
  .chat-item .chat-item-left{
    flex: 1;
    overflow: hidden;
  }
  .chat-item .chat-item-right{
    height: 30px;
    background-color: red;
    color: #fff;
    border-radius: 10px;
  }
  .chat-item .chat-item-top{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  .chat-item .chat-item-top .left,
  .chat-item .chat-item-top .right{
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #333;
  }
  .chat-item .chat-item-bottom{
    line-height: 1.5;
  }
</style>
