<template>
  <div class="search">
    <!-- 头部navbar区域 -->
    <nav-bar class="search-nav">
      <template #left>
        <span class="search-nav-back" @click="goBack">&lt;</span>
      </template>
      <template #center>
        <p class="search-title">搜索</p>
      </template>
    </nav-bar>
    <search-input 
      :type='type' 
      v-model:keyWords='keyWords'
      @search='search'
      @changeType='changeType'
       />
    <BS class="search-bs">
      <post-item v-show="postList.length" v-for="item in postList" :key="item._id" :postObj='item' />
      <p class="no-result" v-show="!postList.length">{{text}}</p>
    </BS>
    <Toast v-show="showToast">{{toastContent}}</Toast>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar.vue'
import BS from 'components/common/BS/BS.vue'
import Toast from 'components/content/Toast/Toast.vue'
import PostItem from 'components/content/PostItem/PostItem.vue'

import SearchInput from './ChildContent/SearchInput.vue'

import { searchPost } from 'api'
import toast from '../../mixins/toast'
import { getInfo } from 'utils/optInfo'

export default {
  name: 'Search',
  components: { NavBar, SearchInput, BS, Toast, PostItem },
  mixins: [toast],
  data() {
    return {
      type: 'username',
      keyWords: '',
      postList: [],
      text: '快来搜索喜欢的岗位吧'
    }
  },
  methods: {
    // 回退
    goBack() {
      this.$router.go(-1)
    },
    // 搜索
    async search() {
      const {type, keyWords} = this
      const userType = getInfo('__user__')?.type
      if(!keyWords.trim()) {
        return this.open('搜索内容不能为空')
      }
      const res = await searchPost({keyWords, type})
      if(res.meta.code != 0) {
        return this.open('没有搜到哦，换个关键字试试吧')
      }
      this.postList = res.data.filter(item => item.type != userType && item.type != 'admin')
      this.keyWords = ''
      this.text = '抱歉，没搜到哦，换个关键字试试吧'
    },
    // 切换搜索类型
    changeType(type) {
      this.type = type
    }
  }
}
</script>

<style scoped>
  .search{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgb(240, 239, 239);
  }
   .search .search-nav{
    background-color: #008c8c;
    color: #fff;
    font-size: 22px;
  }
  .search .search-nav .search-nav-back{
    margin-left: -35px;
    font-size: 24px;
  }
  .search .search-bs{
    height: calc(100% - 44px - 40px - 41px);
  }
  .search .search-bs .no-result{
    padding: 10px;
    font-size: 13px;
    color: #999;
  }
</style>
