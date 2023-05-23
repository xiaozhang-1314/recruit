<template>
  <div class="search-input">
    <input 
      type="text" 
      placeholder="请输入要搜索的内容" 
      :value="keyWords" 
      @input="$emit('update:keyWords', $event.target.value)">
    <button class="btn" @click="search">搜索</button>
  </div>
  <div class="search-type">
    <span class="search-type-box" :class="{'active': type==='username'}" @click="changeType('username')">
      <span class="circle"></span>
      <span class="text">用户名</span>
    </span>
    <span class="search-type-box" :class="{'active': type==='post'}" @click="changeType('post')">
      <span class="circle"></span>
      <span class="text">职位</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    type: {
      type: String,
      default: ''
    },
    keyWords: {
      type: String,
      default: ''
    }
  },
  emits: ['search', 'changeType', 'update:keyWords'],
  methods: {
    search() {
      this.$emit('search')
    },
    changeType(type) {
      this.$emit('changeType', type)
    }
  }
}
</script>

<style scoped>
  .search-input{
    height: 40px;
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 0 5px;
  }
  .search-input input{
    flex: 1;
    padding-right: 5px;
  }
  .search-input .btn{
    background-color: #008c8c;
    color: #fff;
    font-size: 16px;
    height: 35px;
    border-radius: 6px;
  }
  .search-type{
    width: 50%;
    display: flex;
    margin: 10px 0 15px;
    justify-content: space-around;
    position: relative;
  }
  .search-type::after{
    display: block;
    content: '';
    border-bottom: 1px solid #ccc;
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100vw;
  }
  .search-type .search-type-box{
    display: flex;
    align-items: center;
    color: #999;
  }
  .search-type .search-type-box .circle{
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #fff;
    background-clip: content-box;
    margin-right: 5px;
    padding: 2px;
    border: 1px solid #000;
  }
  .search-type .search-type-box.active .circle{
    border: 1px solid rgb(13, 148, 148);
    background-color: rgb(13, 148, 148);
  }
  .search-type .search-type-box.active .text{
    color: #008c8c;
  }
</style>
