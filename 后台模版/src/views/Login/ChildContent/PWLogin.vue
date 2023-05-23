<template>
  <div class="pw-login">
    <my-input laber='用户名' v-model:value='username' />
    <my-input laber='密&nbsp;&nbsp;&nbsp;码' type='password' v-model:value='password' />
    <Button @click="login">登录</Button>
    <div class="go-register" @click="goRegister">还没有账号</div>
    <Toast v-show="showToast">{{toastContent}}</Toast>
  </div>
</template>

<script>
import MyInput from 'components/content/MyInput/MyInput.vue'
import Button from 'components/content/Button/Button.vue'
import Toast from 'components/content/Toast/Toast.vue'

import { login } from 'api'
import { saveInfo } from 'utils/optInfo'
import toast from '../../../mixins/toast'

export default {
  name: 'PWLogin',
  components: { MyInput, Button, Toast },
  mixins: [toast],
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    goRegister() {
      this.$emit('goRegister')
    },
    // 登录
    async login() {
      const { username, password } = this
      if(!username.trim() || !password.trim()) {
        return this.open('信息必须填写完整！')
      }
      const res = await login({username, password})
      if(res.meta.code != 0) {
        return this.open('账号或密码错误！')
      }
      saveInfo('__user__', res.data)
      this.username = this.password = ''
      if(res.data.type === 'admin') {
        return this.$router.replace('/backEnd')
      }
      this.$router.replace('/home')
    }
  }
}
</script>

<style scoped>
  .pw-login{
    margin: 0 12px;
    background-color: #fff;
    border-radius: 5px;
  }
  .pw-login .go-register{
    height: 45px;
    border-bottom: 1px solid #ccc;
    text-align: center;
    line-height: 45px;
    font-size: 16px;
    font-weight: 900;
    border-radius: 5px;
  }
</style>
