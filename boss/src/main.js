import Vue from "vue";
import App from "./App.vue";
import router from "@/routers";
import {
  Input,
  Select,
  FormItem,
  Message,
  Option,
  Button,
  Dialog,
  Form,
  Tabs,
  TabPane,
  Card,
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import store from "@/store/index";
// 引入mock文件，目的是使其执行
import "../mock";
import "@/mock/mockServe";
// 引入element-ui相关组件

Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Card);
Vue.use(Button);
Vue.use(Card);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.prototype.$message = Message;
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
