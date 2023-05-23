//此文件主要是为了二次封装axios
//为他增加功能 
//1.配置基础路径（baseURL 目的是组件使用发送请求的路径就不用再加'http://sph-h5-api.atguigu.cn'
//2.配置请求超时
//4.返回的响应不再需要从data属性中拿数据，而是响应后就是需要的数据
//5.统一处理请求错误
import axios from 'axios'
//创建一个axios实例并将其赋值给变量 ajax
const ajax = axios.create({
    baseURL: '/json',   //配置基础路径  因为所有的接口都有/api（查找配置相关文档查找axios官网）
    timeout: 10000,                             //设置请求超时
});
// 添加请求拦截器
ajax.interceptors.request.use(function (config) {
    //请求发送成功执行的回调函数
    return config
});

// 添加响应拦截器
ajax.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    if (error.response.status == 401) {
        alert('未授权')
    } else if (error.response.status == 403) {
        alert('服务器拒绝请求')
    } else if (error.response.status == 404) {
        alert('不存在该网页')
    }
    return new Promise(() => { })  //返回一个pending状态下的promise 这样就不用在组件中处理错误了
});
export default ajax

