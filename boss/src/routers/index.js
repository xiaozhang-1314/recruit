//1、 引入vue和vue-router
import Vue from "vue";
import VueRouter from "vue-router";
// 2、使用vuerouter
Vue.use(VueRouter);

// 3、创建vuerouter实例
const router = new VueRouter({
  routes: [
    {
      path: "/home",
      // 实现路由懒加载
      component: () => import("@/pages/home"),
    },
    {
      // 职位
      path: "/occupation",
      // 实现路由懒加载
      component: () => import("@/pages/occupation"),
    },
    {
      // 海归
      path: "/returnee",
      // 实现路由懒加载
      component: () => import("@/pages/returnee"),
    },
    {
      // 公司
      path: "/company",
      // 实现路由懒加载
      component: () => import("@/pages/company"),
    },
    {
      //资讯
      path: "/information",
      // 实现路由懒加载
      component: () => import("@/pages/information"),
    },

    {
      // 校园
      path: "/school",
      // 实现路由懒加载
      component: () => import("@/pages/school"),
    },
    {
      // 百科
      path: "/baike",
      // 实现路由懒加载
      component: () => import("@/pages/baike"),
    },
    {
      // 路由重定向为首页
      path: "/",
      redirect: "/home",
    },
  ],
});


export default router

