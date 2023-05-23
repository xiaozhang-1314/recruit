<template>
  <div class="register">
    <my-input laber='用户名' v-model:value='username' />
    <my-input laber='密&nbsp;&nbsp;&nbsp;码' type='password' v-model:value='password' />
    <my-input laber='确认密码' type='password' v-model:value='checkPas' />
    <div class="register-type">
      <span>用户类型:</span>
      <div class="check">
        <span class="control-type" @click="changeType('worker')">
          <span class="circle" :class="{'active': type==='worker'}"></span>
          <span>求职者</span>
        </span>
        <span class="control-type" @click="changeType('hr')">
          <span class="circle" :class="{'active': type==='hr'}"></span>
          <span>招聘者</span>
        </span>
      </div>
    </div>
    <Button @click="register">注册</Button>
    <div class="go-login" @click="goLogin">已有账号</div>
    <Toast v-show="showToast">{{toastContent}}</Toast>
  </div>
</template>

<script>
import MyInput from 'components/content/MyInput/MyInput.vue'
import Button from 'components/content/Button/Button.vue'
import Toast from 'components/content/Toast/Toast.vue'

import { register } from 'api'
import { saveInfo } from 'utils/optInfo'
import toast from '../../../mixins/toast'

export default {
  name: 'Register',
  components: { MyInput, Button, Toast },
  mixins: [toast],
  data() {
    return {
      type: 'worker',
      username: '',
      password: '',
      checkPas: ''
    }
  },
  methods: {
    goLogin() {
      this.$emit('goLogin')
    },
    changeType(type) {
      this.type = type
    },
    // 注册
    async register() {
      const { username, password, checkPas, type } = this
      if(!username.trim() || !password.trim() || !checkPas.trim()) {
        return this.open('信息必须填写完整')
      }
      if(password != checkPas) {
        return this.open('新旧密码不一致')
      }
      const res = await register({username, password, type})
      if(res.meta.code != 0) {
        return this.open(res.meta.msg)
      }
      saveInfo('__user__', res.data)
      this.$router.replace('/perfectInfo/' + res.data._id)
      this.username = this.password = this.checkPas = ''
      this.type = 'worker'
    }
  }
}
</script>

<style scoped>
  .register{
    margin: 0 12px;
    margin: 0 12px;
    background-color: #fff;
    border-radius: 5px;
  }
  .register .go-login{
    height: 45px;
    border-bottom: 1px solid #ccc;
    text-align: center;
    line-height: 45px;
    font-size: 16px;
    font-weight: 900;
    border-radius: 5px;
  }
  .register .register-type{
    height: 45px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-size: 14px;
    font-weight: 900;
  }
  .register .register-type .check{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .register .register-type .check .control-type{
    display: flex;
    align-items: center;
  }
  .register .register-type .check .circle{
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
  .register .register-type .check .circle.active{
    border: 1px solid rgb(13, 148, 148);
    background-color: rgb(13, 148, 148);
  }
</style>
