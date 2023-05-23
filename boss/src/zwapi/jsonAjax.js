// 该文件是对axios的二次封装
// 目的是为了让整个项目发送ajax请求时，通用的配置不用一遍遍的重复编写

// 1. 引入axios模块
import axios from 'axios'
// 2. 创建axios实例对象 以后整个项目都用这个实例发送请求
const jsonAjax = axios.create({
    baseURL:'/json',
    timeout:5000, // 设置超时时间
})
// 3. 设置请求拦截器
jsonAjax.interceptors.request.use(config=>{
    return config
})

// 4. 设置响应拦截器
jsonAjax.interceptors.response.use(
    response=>{
        return response.data
    },
    error=>{
        // 如果发送请求出错了,会在这里统一提示错误信息
        // return error.message 如果只写这个是错误的，因为错误信息是字符串的话是非Promise值,也会认为是成功
        // 返回失败的Promise实例  目的是走程序员自己设置的错误信息
        return Promise.reject(new Error(error.message))
    }
)

// 5. 导出对象
export default jsonAjax
