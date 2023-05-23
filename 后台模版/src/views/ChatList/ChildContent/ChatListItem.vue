<template>
  <div class="chat-list-item" @click="goDetail">
    <div class="chat-list-left">
      <img :src="info.avatar" alt="">
    </div>
    <div class="chat-list-center">
      <p class="chat-list-name">{{info.name}}</p>
      <p class="chat-list-content">{{info.content.content}}</p>
    </div>
    <div class="chat-list-right">
      <i class="iconfont icon-youjiantou"></i>
    </div>
    <div class="unread" v-show="info.unRead">{{info.unRead}}</div>
  </div>
</template>

<script>
import { getInfo } from 'utils/optInfo'

export default {
  name: 'ChatListItem',
  props: {
    info: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    // 跳转详情
    goDetail() {
      const _id = getInfo('__user__')._id
      let tempArr = [_id, this.info.targetId].sort((a, b) => {
        if(a > b) return 1
        else if(a < b) return -1
        else return 0
      })
      const chat_id = tempArr.join('_')
      this.$router.push('/chatDetail/' + chat_id)
    }
  }
}
</script>

<style scoped>
  .chat-list-item{
    display: flex;
    padding: 10px 8px;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
    align-items: center;
    position: relative;
  }
  .chat-list-item .chat-list-left{
    margin-right: 10px;
  }
  .chat-list-item .chat-list-left img{
    width: 30px;
    height: 30px;
  }
  .chat-list-item .chat-list-center{
    flex: 1;
    overflow: hidden;
  }
  .chat-list-item .chat-list-center p{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    line-height: 1.5;
  }
  .chat-list-item .chat-list-center .chat-list-name{
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .chat-list-item .chat-list-center .chat-list-content{
    font-size: 13px;
    color: #999;
  }
  .chat-list-item .chat-list-right{
    margin-left: 5px;
  }
  .chat-list-item .chat-list-right .iconfont{
    font-size: 18px;
  }
  .chat-list-item .unread{
    width: 18px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    position: absolute;
    right: 30px;
    font-size: 12px;
    background-color: red;
    color: #fff;
    border-radius: 50%;
  }
</style>
