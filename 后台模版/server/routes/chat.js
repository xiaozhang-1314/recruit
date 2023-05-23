const express = require('express')
const ChatModel = require('../mongodb/chat')
const UserModel = require('../mongodb/user')

const chatRouter = express.Router()

// 获取聊天列表
chatRouter.get('/chatlist', async function(req, res, next) {
  try {
    const usersObj = {}
    const userList = await UserModel.find()
    userList.forEach(function(item) {
      usersObj[item._id] = {avatar: item.avatar, username: item.username}
    })
    const chatList =  await ChatModel.find()
    res.json({
      data: {
        users: usersObj,
        chatList
      },
      meta: {
        code: 0,
        status: 200,
        msg: 'success'
      }
    })
  } catch (error) {
    next(error)
  }
})

// 修改指定消息已读
chatRouter.post('/hasread', async function(req, res, next) {
  try {
    const result = await ChatModel.update(req.body, {readed: true}, {multi: true})
    res.json({
      data: result.nModified,
      meta: {
        code: 0,
        status: 200,
        msg: 'success'
      }
    })
  } catch (error) {
    next(error)
  }
})

//获取加工后的用户列表对象
chatRouter.get('/users', async function(req, res, next) {
  try {
    const usersObj = {}
    const userList = await UserModel.find()
    userList.forEach(function(item) {
      usersObj[item._id] = {avatar: item.avatar, username: item.username}
    })
    res.json({
      data: {
        users: usersObj
      },
      meta: {
        code: 0,
        status: 200,
        msg: 'success'
      }
    })
  } catch (error) {
    next(error)
  }
})

//搜索聊天
chatRouter.get('/searchat', async function(req, res, next) {
  const query = req.query
  const search = new RegExp(query.content)
  try {
    const list = await ChatModel.find({ content: search })
    res.status(200).json({
      data: list,
      meta: {
        code: 0,
        status: 200,
        msg: 'success'
      }
    })
  } catch (err) {
    next(err)
  }
})

//删除聊天
chatRouter.get('/removeChat', async function(req, res, next) {
  const _id = req.query._id
  try {
    const user = await ChatModel.deleteOne({_id})
    const str = user.ok === 1 ? '删除成功' : '删除失败'
    res.status(200).json({
      data: str,
      meta: {
        code: 0,
        status: 200,
        msg: 'success'
      }
    })
  } catch (err) {
    next(err)
  }
})

// 删除所有聊天
chatRouter.get('/removeAll', async function(req, res, next) {
  const _id = req.query._id
  try {
    const list = await ChatModel.remove({})
    res.status(200).json({
      meta: {
        code: 0,
        status: 200,
        msg: 'success'
      }
    })
  } catch (err) {
    next(err)
  }
})

module.exports = chatRouter
