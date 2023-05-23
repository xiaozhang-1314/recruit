import axios from "axios";
import 'nprogress/nprogress.css'
import NProgress from "nprogress";
//mock 模拟数据 请求相应拦截
const mockAxios = axios.create({
    baseURL:'/mock',
    timeout:5000,
});

//请求拦截器
mockAxios.interceptors.request.use(config=>{
    NProgress.start()
    return config
})

//响应拦截器
mockAxios.interceptors.response.use(response=>{
    NProgress.done()
    console.log(response);
    return response.data.data
},err=>{
    NProgress.done()
    console.log("err -> ", err);
    return Promise.reject(new Error(err.message))
})

export default mockAxios
