<template>
  <div class="choose-avatar">
    <div class="choose-header">
      <h3>{{text}}选择头像</h3>
      <img v-show="cAvatar" :src="cAvatar" alt="">
    </div>
    <div class="avatar-list">
      <div 
        class="avatar-item" 
        :class="{'active': cn === i}" 
        v-for="(item, i) in avatarList"
        @click="chooseAv(i)"
        :key="i">
        <img :src="item" alt="">
        <span>头像{{i+1}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChooseAvatar',
  data() {
    return {
      avatarList: [],
      cn: -1,
      cAvatar: ''
    }
  },
  methods: {
    // 获取图片列表
    async getAvatarList() {
      for(let i = 1; i <= 20; i++) {
        const img = await import(`../../../assets/images/头像${i}.png`)
        this.avatarList.push(img.default)
      }
    },
    // 选择头像
    chooseAv(i) {
      this.cn = i
      this.cAvatar = this.avatarList[i]
      this.$emit('chooseAv', this.cAvatar)
    }
  },
  computed: {
    text() {
      return this.cAvatar ? '已': '请'
    }
  },
  created() {
    this.getAvatarList()
  }
}
</script>

<style scoped>
  .choose-avatar .choose-header{
    background-color: rgb(240, 239, 239);
  }
  .choose-avatar .choose-header{
    display: flex;
    align-items: center;
    padding: 3px 0;
  }
  .choose-avatar .choose-header h3{
    padding: 10px 15px;
    font-size: 13px;
    color: #999;
  }
  .choose-avatar .choose-header img{
    width: 30px;
    height: 30px;
  }
  .choose-avatar .avatar-list{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
  }
  .choose-avatar .avatar-list .avatar-item{
    width: 20%;
    height: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
  }
  .choose-avatar .avatar-list .avatar-item.active{
    background-color: #ccc;
  }
  .choose-avatar .avatar-list .avatar-item img{
    width: 30%;
    margin-bottom: 10px;
  }
</style>
