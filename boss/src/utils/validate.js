import Vue from "vue";
import VeeValidate, { Validator } from "vee-validate";
// 引入中文语言包
import zh_CN from "vee-validate/dist/locale/zh_CN";

// 引入邮箱和手机正则
import {phoneReg,emailReg} from './reg'
// 使用正则
Vue.use(VeeValidate)
// 加载中文包
Validator.localize('zh_CN',zh_CN)

//使用手机正则
Validator.extend('phone_rule',{
    validate:(value)=>{
        phoneReg.test(value)
    },
    // 验证失败时执行的回调
    getMessage:(field)=> '手机格式不正确'
}) 
//使用邮箱正则
Validator.extend('email_rule',{
    validate:(value)=>{
        emailReg.test(value)
    },
    // 验证失败时执行的回调
    getMessage:(field)=> '邮箱格式不正确'
}) 
