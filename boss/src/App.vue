<template>
  <div class="app">
    <Header></Header>
    <router-view></router-view>
    <Bottom />
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Bottom from "./components/bottom.vue";
import Home from "./pages/home/index.vue";
import Company from "./pages/company/index.vue";


export default {
  name: "App",
  components: {
    Header,
    Bottom,
    Home,
    Company,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app {
  background-color: #fff;
}
</style>
