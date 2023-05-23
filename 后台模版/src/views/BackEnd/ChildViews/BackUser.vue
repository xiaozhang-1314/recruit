<template>
  <div class="back-user">
    <BS class="back-user-bs" ref="BURef">
      <user-item 
        v-for="item in userList" 
        :key="item._id"
        @removeSuccess='removeSuccess'
        :item='item' />
      <p class="no-user" v-show="!userList.length">没有任何用户哦</p>
    </BS>
  </div>
</template>

<script>
import BS from 'components/common/BS/BS.vue'
import UserItem from './ChildContent/UserItem.vue'

import { getUserList } from 'api'

import { nextTick, onMounted, ref } from 'vue'
export default {
  name: 'BackUser',
  components: { BS, UserItem },
  setup() {
    const userList = ref([])
    const BURef = ref(null)

    // 获取所用用户列表
    const getAllUserList = async () => {
      const res = await getUserList()
      if(res.meta.code === 0) {
        userList.value = res.data.filter(item => item.type != 'admin')
      }
    }
    getAllUserList()

    // 删除成功回调
    const removeSuccess = () => {
      getAllUserList()
    }
    // nextTick(() => {
    //   BURef.value?.refresh()
    // })
    setTimeout(() => {
      BURef.value?.refresh()
    }, 100)

    return {
      userList,
      removeSuccess,
      BURef
    }
  }
}
</script>

<style scoped>
  .back-user{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 90px;
    background-color: rgb(240, 239, 239);
    border-top: 3px solid rgb(240, 239, 239);
  }
  .back-user .back-user-bs{
    height: 100%;
  }
  .back-user .back-user-bs .no-user{
    padding: 10px;
    color: #999;
    font-size: 13px;
  }
</style>
