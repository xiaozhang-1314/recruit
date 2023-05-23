<template>
  <div class="user-item">
    <div class="user-item-show" @click="changeShow">
      <img :src="item.avatar" alt="">
      <span class="name">{{item.username}}</span>
      <span class="type">{{type(item.type)}}</span>
    </div>
    <transition name="user">
      <div class="user-item-hidden" v-show="isShow">
        <div class="left">
          <p>
            <span>职位：</span>
            <span>{{item.post}}</span>
          </p>
          <p v-if="item.company">
            <span>公司：</span>
            <span>{{item.company}}</span>
          </p>
          <p v-if="item.salary">
            <span>薪水：</span>
            <span>{{item.salary}}</span>
          </p>
          <p>
            <span>介绍：</span>
            <span>{{item.info}}</span>
          </p>
        </div>
        <button @click="remove">删除</button>
      </div>
    </transition>
  </div>
</template>

<script>
import { removeUser } from 'api'

import { computed, ref } from 'vue'

export default {
  name: 'UserItem',
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  setup(props, {emit}) {
    const isShow = ref(false)
    

    const changeShow = () => {
      isShow.value = !isShow.value
    }

    const remove = async () => {
      const _id = props.item._id
      const res = await removeUser({_id})
      if(res.meta.code === 0) {
        emit('removeSuccess')
      }
    }


    const type = computed(() => {
      return (value) => {
        return value === 'hr' ? "招聘者": '求职者'
      }
    })

    return {
      type,
      changeShow,
      isShow,
      remove
    }
  }
}
</script>

<style scoped>
  .user-item{
    margin: 0 0 10px;
    background-color: #fff;
    padding: 10px;
  }
  .user-item .user-item-show{
    display: flex;
    align-items: center;
  }
  .user-item .user-item-show .name{
    flex: 1;
    margin: 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .user-item .user-item-show .type{
  font-size: 13px;
  color: #999;
}
  .user-item .user-item-hidden{
    display: flex;
    margin-top: 10px;
    border-top: 1px solid #ccc;
    padding-top: 5px;
    align-items: center;
  }
  .user-item .user-item-hidden button{
    margin-left: 10px;
    height: 26px;
    font-size: 14px;
    background-color: red;
    color: #fff;
    border-radius: 8px;
  }
  .user-item .user-item-hidden .left{
    flex: 1;
    overflow: hidden;
  }
  .user-item .user-item-hidden .left p{
    line-height: 1.8;
    font-size: 12px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .user-item .user-enter-from,
  .user-item .user-leave-to{
    opacity: 0;
    transform: translateY(-50px);
  }
  .user-item .user-enter-active{
    transition: all 0.3s;
  }
</style>
