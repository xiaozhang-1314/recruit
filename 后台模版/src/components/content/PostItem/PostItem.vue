<template>
  <div class="post-item" @click="goDetail">
    <div class="post-item-avatar">
      <img :src="postObj.avatar" alt="">
      <span class="post-item-name">{{postObj.username}}</span>
    </div>
    <div class="post-item-desc">
      <p>职位：{{postObj.post}}</p>
      <p>描述：{{postObj.info}}</p>
      <p v-if="postObj.salary">薪资：<span class="salary">{{postObj.salary}}</span></p>
    </div>
  </div>
</template>

<script>
import { getInfo } from 'utils/optInfo'

export default {
  name: 'PostItem',
  props: {
    postObj: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    goDetail() {
      const _id = getInfo('__user__')._id
      if(!_id) {
        return this.$router.push('/login')
      }
      let tempArr = [_id, this.postObj._id].sort((a, b) => {
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
  .post-item{
    margin: 10px 10px 0;
    background-color: #fff;
    border-radius: 5px;
  }
  .post-item .post-item-avatar{
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  .post-item .post-item-avatar img{
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
  .post-item .post-item-avatar .post-item-name{
    color: #999;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: right;
  }
  .post-item .post-item-desc{
    padding: 10px;
  }
  .post-item .post-item-desc p{
    line-height: 1.5;
    font-size: 14px;
    color: rgb(73, 72, 72);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .post-item .post-item-desc p .salary{
    color: red;
    font-size: 16px;
    font-weight: 600;
  }
</style>
