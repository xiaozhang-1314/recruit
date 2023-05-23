<template>
  <div class="back-chat">
    <div class="chat-search">
      <input type="text" placeholder="请输入要搜索的内容" v-model="content">
      <button @click="getChatList">搜索</button>
    </div>
    <BS class="back-chat-bs">
      <chat-item
        v-show="chatList.length"
        v-for="item in chatList"
        :key="item._id"
        :users='users'
        :chat='item'
        @removeSuccess='removeSuccess' />
      <p class="no-chat" v-show="!chatList.length">{{tip}}</p>
    </BS>
  </div>
</template>

<script>
import BS from 'components/common/BS/BS.vue'

import ChatItem from './ChildContent/ChatItem.vue'

import { getUsers, searchChat } from 'api'

import { ref } from 'vue'
export default {
  name: 'BackChat',
  components: { BS, ChatItem },
  setup() {
    let users = ref({})
    const chatList = ref([])
    const content = ref('')
    const tip = ref('搜索你想要的聊天记录吧')

    // 根据关键字搜索聊天记录
    const getChatList = async () => {
      const contentVal = content.value
      if(!contentVal.trim()) {
        return
      }
      tip.value = '没有相关聊天哦...'
      const res = await searchChat({content: contentVal})
      if(res.meta.code === 0) {
        chatList.value = res.data
        content.value = ''
      }
    }

    // 删除成功
    const removeSuccess = (_id) => {
      const i = chatList.value.findIndex(item => item._id === _id)
      chatList.value.splice(i, 1)
    }

    // 获取加工后的用户列表对象
    async function getUsersObj() {
      const res = await getUsers()
      if(res.meta.code === 0) {
        users.value = res.data
      }
    }
    getUsersObj()

    return {
      users,
      chatList,
      content,
      getChatList,
      removeSuccess,
      tip
    }

  }
}
</script>

<style scoped>
  .back-chat{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 90px;
    background-color: rgb(240, 239, 239);
    border-top: 3px solid rgb(240, 239, 239);
  }
  .back-chat .chat-search{
    display: flex;
    align-items: center;
    background-color: #fff;
    height: 30px;
    border-bottom: 1px solid #ccc;
    border-radius: 6px;
    margin: 10px 0;
    padding: 0 5px;
  }
  .back-chat .chat-search input{
    flex: 1;
    padding: 0 5px;
  }
  .back-chat .chat-search button{
    background-color: #008c8c;
    color: #fff;
    border-radius: 5px;
  }
  .back-chat .back-chat-bs{
    height: calc(100% - 51px);
  }
  .back-chat .back-chat-bs .no-chat{
    padding: 10px;
    color: #999;
    font-size: 13px;
  }
</style>
