<template>
  <div class="login">
    <!-- 头部navbar区域 -->
    <nav-bar class="login-nav">
      <template #center>
        <p class="login-title">校招直聘</p>
      </template>
    </nav-bar>
    <!-- logo区域 -->
    <div class="login-logo">
      <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3846429535,824396309&fm=11&gp=0.jpg" alt="">
    </div>
    <!-- 登录区域 -->
    <p-w-login v-show="isLogin" @go-register='goRegister' />
    <!-- 注册区域 -->
    <Register v-show="!isLogin" @go-login='goLogin' />
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar.vue'
import Register from './ChildContent/Register.vue'
import PWLogin from './ChildContent/PWLogin.vue'

export default {
  name: 'Login',
  components: { NavBar, Register, PWLogin },
  data() {
    return {
      isLogin: true
    }
  },
  methods: {
    // 切换注册
    goRegister() {
      this.isLogin = false
    },
    // 切换登录
    goLogin() {
      this.isLogin = true
    }
  }
}
</script>

<style scoped>
  .login{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgb(240, 239, 239);
  }
  .login .login-nav{
    background-color: #008c8c;
    color: #fff;
    font-size: 20px;
  }
  .login .login-logo{
    margin: 15px 0;
    text-align: center;
  }
  .login .login-logo img{
    width: 60%;
    height: 200px;
    border-radius: 50%;
  }
</style>
