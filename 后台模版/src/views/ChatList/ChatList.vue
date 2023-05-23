<template>
  <div class="chat-list">
    <!-- 头部navbar区域 -->
    <nav-bar class="chat-list-nav">
      <template #center>
        <p class="chat-list-title">消息列表</p>
      </template>
    </nav-bar>
    <div class="chat-list-unlogined" v-if="!logined">
      <p>你还没有登录哦, 请先登录...</p>
      <Button class="chat-list-unlogined-btn" @click="goLogin">登录</Button>
    </div>
    <BS class="chat-list-bs" ref="chatListBs" v-else>
      <chat-list-item v-for="item in chatList" :key="item.name" :info='item' />
    </BS>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar.vue'
import BS from 'components/common/BS/BS.vue'
import Button from 'components/content/Button/Button.vue'

import ChatListItem from './ChildContent/ChatListItem.vue'

import { getInfo } from 'utils/optInfo'
import isLogin from '../../mixins/isLogin'

export default {
  name: 'ChatList',
  components: { NavBar, BS, ChatListItem, Button },
  mixins: [isLogin],
  computed: {
    // 消息列表
    chatList() {
      const _id = getInfo('__user__')._id
      const obj = this.$store.getters.renderChat
      const users = this.$store.state.users
      return Object.keys(obj).map(key => {
        const idArr = key.split('_')
        const targetId = idArr[0] === _id ? idArr[1] : idArr[0]
        let tempArr = obj[key]
        let arr = tempArr.filter(item => {
          return item.to === _id && !item.readed
        })
        return {
          name: users[targetId]?.username,
          avatar: users[targetId]?.avatar,
          content: tempArr[tempArr.length - 1],
          targetId,
          unRead: arr.length
        }
      }).sort((a, b) => {
        if(a.content.create_time > b.content.create_time) return -1
        else if(a.content.create_time < b.content.create_time) return 1
        else return 0
      }).filter(item => item.name)
    }
  },
  methods: {
    goLogin() {
      this.$router.push('/login')
    }
  },
  activated() {
    const _id = getInfo('__user__')._id
    if(_id && !this.$store.state.chatList.length) {
      this.$store.dispatch('getChatInfo')
    }

    this.$nextTick(() => {
      this.$refs?.chatListBs?.refresh()
    })
  }
}
</script>

<style scoped>
  .chat-list{
    position: fixed;
    top: 0;
    bottom: 49px;
    left: 0;
    right: 0;
    background-color: rgb(240, 239, 239);
  }
  .chat-list .chat-list-nav{
    background-color: #008c8c;
    color: #fff;
    font-size: 20px;
  }
  .chat-list .chat-list-bs{
    height: calc(100% - 44px);
  }
  .chat-list .chat-list-unlogined{
    margin-top: 200px;
    font-size: 14px;
    color: #999;
    text-align: center;
  }
  .chat-list .chat-list-unlogined .chat-list-unlogined-btn{
    width: 50%;
    margin-top: 15px;
  }
</style>
