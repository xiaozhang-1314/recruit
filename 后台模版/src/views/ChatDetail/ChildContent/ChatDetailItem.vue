<template>
  <div class="chat-detail-item" v-if="!isReverse">
    <img :src="users[chatItem.from].avatar" alt="">
    <p>{{chatItem.content}}</p>
  </div>
  <div class="chat-detail-item reverse" v-if="isReverse">
    <p>{{chatItem.content}}</p>
    <img :src="users[chatItem.from].avatar" alt="">
  </div>
</template>

<script>
export default {
  name: 'ChatDetailItem',
  props: {
    isReverse: {
      type: Boolean,
      default: false
    },
    chatItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    users() {
      return this.$store.state.users
    }
  }
}
</script>

<style scoped>
  .chat-detail-item{
    padding: 10px;
    display: flex;
    align-items: center;
  }
  .chat-detail-item.reverse{
    justify-content: flex-end;
  }
  .chat-detail-item.reverse img{
    margin-right: 0;
    margin-left: 10px;
  }
  .chat-detail-item img{
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .chat-detail-item p{
    padding: 10px;
    border-radius: 18px;
    line-height: 1.5;
    background-color: #fff;
    word-wrap: break-word;
    word-break: break-all;
  }
</style>
