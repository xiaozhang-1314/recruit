<template>
  <div class="worker-perfect">
    <my-input laber='求职岗位' v-model:value='post' />
    <div class="worker-perfect-info">
      <p>个人介绍:</p>
      <textarea placeholder="请输入个人介绍" v-model="info"></textarea>
    </div>
    <Button @click="save">保存</Button>
    <Toast v-show="showToast">{{toastContent}}</Toast>
  </div>
</template>

<script>
import MyInput from 'components/content/MyInput/MyInput.vue'
import Button from 'components/content/Button/Button.vue'
import Toast from 'components/content/Toast/Toast.vue'

import { perfectInfoById } from 'api'
import { saveInfo, getInfo } from 'utils/optInfo'
import toast from '../../../mixins/toast'

export default {
  name: 'WorkerPerfect',
  components: { MyInput, Button, Toast },
  mixins: [toast],
  props: {
    avatar: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      post: '',
      info: ''
    }
  },
  methods: {
    // 保存信息
    async save() {
      const { post, info, avatar } = this
      if(!post.trim() || !info.trim() || !avatar.trim()) {
        return this.open('信息必须填写完整')
      }
      const { _id } = this.$route.params
      const res = await perfectInfoById({_id, post, info, avatar })
      if(res.meta.code != 0) {
        return this.open(res.meta.msg)
      }
      saveInfo('__user__', res.data)
      this.$router.replace('/home')
    }
  },
  created() {
    const info = getInfo('__user__')
    if(info._id) {
      this.post = info.post
      this.info = info.info
    }
  }
}
</script>

<style scoped>
  .worker-perfect .worker-perfect-info{
    padding: 0 10px;
  }
  .worker-perfect .worker-perfect-info p{
    height: 45px;
    line-height: 45px;
    font-weight: 900;
    font-size: 14px;
  }
  .worker-perfect .worker-perfect-info textarea{
    width: 100%;
    height: 140px;
    resize: none;
    font-size: 16px;
  }
  .worker-perfect .worker-perfect-info textarea::placeholder{
    font-size: 12px;
    color: #999;
  }
</style>
