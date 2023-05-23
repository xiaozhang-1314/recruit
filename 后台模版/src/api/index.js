import ajax from './ajax'

const baseUrl = '/api'

/**
 * 注册
 * params: username: 用户名，type：用户类型，password： 密码
 * 
 */
export const register = params => ajax(baseUrl+'/register', params, 'post')

 /**
 * 登录
 * params: username: 用户名，password： 密码
 * 
 */
export const login = params => ajax(baseUrl+'/login', params, 'post')

/**
 * 根据_id获取用户
 * params: _id: 用户_id
 * 
 */
export const getUserById = params => ajax(baseUrl+'/getUserById', params)

/**
 * 完善信息
 * params: _id: 用户_id, avatar: 头像，info： 信息，post： 职位，salary：薪水，company：公司
 * 
 */
export const perfectInfoById = params => ajax(baseUrl+'/perfectInfoById', params, 'post')

/**
 * 获取用户列表
 * params: null
 * 
 */
export const getUserList = () => ajax(baseUrl+'/getUserList')

/**
 * 获取聊天列表
 * params: null
 * 
 */
 export const getChatlist = () => ajax(baseUrl+'/chatlist')

/**
 * 修改指定消息已读
 * params: from: 发消息_id, to: 接受消息_id 
 * 
 */
  export const hasread = params => ajax(baseUrl+'/hasread', params, 'post')


/**
 * 根据关键字搜索用户
 * params: keyWords: 搜索的关键字, type: 搜索的种类{username: 姓名，post: 职位} 
 * 
 */
export const searchPost = params => ajax(baseUrl+'/search', params)

/**
 * 根据_id删除用户
 * params: _id: 用户_id
 * 
 */
export const removeUser = params => ajax(baseUrl+'/removeUser', params)

/**
 * 获取加工后的用户列表对象
 * params: null
 * 
 */
export const getUsers = () => ajax(baseUrl+'/users')

/**
 * 根据关键字搜索聊天记录
 * params: content: 聊天内容
 * 
 */
 export const searchChat = params => ajax(baseUrl+'/searchat', params)

/**
 * 删除聊天
 * params: _id: 聊天_id
 * 
 */
export const removeChat = params => ajax(baseUrl+'/removeChat', params)
