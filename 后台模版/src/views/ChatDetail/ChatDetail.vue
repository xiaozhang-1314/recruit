<template>
  <div class="chat-detail">
    <!-- 头部navbar区域 -->
    <nav-bar class="chat-detail-nav">
      <template #left>
        <span class="chat-detail-back" @click="goBack">&lt;</span>
      </template>
      <template #center>
        <p class="chat-detail-title">{{targetName}}</p>
      </template>
      <template #right>
        <span class="detail-mine" @click="goProfile"><i class="iconfont icon-geren"></i></span>
      </template>
    </nav-bar>
    <BS class="chat-detail-bs" ref="chatDetailBs">
      <chat-detail-item 
      v-for="item in chatDetailList" 
      :key="item._id"
      :chatItem='item'
      :isReverse='item.isReverse' />
    </BS>
    <key-code @success='success' />
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar.vue'
import BS from 'components/common/BS/BS.vue'

import ChatDetailItem from './ChildContent/ChatDetailItem.vue'
import KeyCode from './ChildContent/KeyCode.vue'

import { getInfo } from 'utils/optInfo'
import { hasread } from 'api'
import socket from '../../socket'

export default {
  name: 'ChatDetail',
  components: { NavBar, BS, ChatDetailItem, KeyCode },
  data() {
    return {
      chat_id: '',
      _id: ''
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },

    // 消息发动成功
    success(content) {
      const from = this._id
      const to = this.targetId
      const chat_id = this.$route.params.chat_id
      const chatObj = {from, to, chat_id, content}
      socket.emit('sendMsg', chatObj)
      this.scrollToTrue()
    },

    // 滚动正确位置
    scrollToTrue() {
      this.$nextTick(() => {
        let scroll = this.$refs?.chatDetailBs?.scroll
        scroll?.scrollTo(0, scroll.maxScrollY, 0)
      })
    },

    goProfile() {
      this.$router.push('/otherProfile/' + this.targetId)
    }
  },
  computed: {
    // 聊天数组
    chatDetailList() {
      const _id = this._id
      const chat_id = this.$route.params.chat_id
      const obj = this.$store.getters.renderChat
      this.scrollToTrue()
      return obj[chat_id]?.map(item => {
        if(item.from === _id) {
          item.isReverse = true
        }
        return item
      })
    },

    // 目标名字
    targetName() {
      const targetId = this.targetId
      return this.$store.state.users[targetId]?.username
    },

    // 目标id
    targetId() {
      const chat_id = this.$route.params.chat_id
      const _id = getInfo('__user__')._id
      return chat_id?.split('_').filter(item => item != _id)[0]
    }
  },
  created() {
    this.chat_id = this.$route.params.chat_id
    const _id = getInfo('__user__')._id
    this._id = _id
    if(_id && !this.$store.state.chatList.length) {
      this.$store.dispatch('getChatInfo')
    }
  },
  mounted() {
    this.scrollToTrue()
    
  },
  async beforeUnmount() {
    const to = this._id
    const from = this.chat_id.split('_').filter(item => item != to)[0]
    const res = await hasread({from, to})
    if(res.meta.code === 0) {
      this.$store.commit('changeStatus', {from, to})
    }
  }
}
</script>

<style scoped>
  .chat-detail{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(240, 239, 239);
  }
  .chat-detail .chat-detail-nav{
    background-color: #008c8c;
    color: #fff;
    font-size: 20px;
  }
  .chat-detail .chat-detail-nav .detail-mine{
    margin-right: -20px;
  }
  .chat-detail .chat-detail-nav .detail-mine .iconfont{
    font-size: 18px;
  }
  .chat-detail .chat-detail-nav .chat-detail-back{
    margin-left: -35px;
    font-size: 24px;
  }
  .chat-detail .chat-detail-bs{
    height: calc(100% - 44px - 40px);
  }
</style>
