const express = require('express')
const UserModel = require('../mongodb/user')

const userRouter = express.Router()
const filter = {password: 0}

// 注册
userRouter.post('/register', async function(req, res, next) {
  const { username} = req.body
  try {
    const user = await UserModel.findOne({username})
    if(user) {
      return res.json({
        meta: {
          code: 1,
          status: 200,
          msg: '该邮箱或用户名已注册'
        }
      })
    }
    const newUser = await new UserModel(req.body).save()
    const endUser = await UserModel.findOne({_id: newUser._id}, filter)
    res.json({
      data: endUser,
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

// 登录
userRouter.post('/login', async function(req, res, next) {
  const { body } = req
  try {
    const user = await UserModel.findOne(body, filter)
    if(!user) {
      return res.json({
        meta: {
          code: 1,
          status: 200,
          msg: '用户名或密码错误'
        }
      })
    }
    res.json({
      data: user,
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

// 根据_id获取用户
userRouter.get('/getUserById',  async function(req, res, next) {
  const { query: { _id } } = req
  try {
    const user = await UserModel.findOne({_id}, filter)
    if(!user) {
      return res.json({
        meta: {
          code: 1,
          status: 200,
          msg: '当前用户不存在'
        }
      })
    }
    res.json({
      data: user,
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

// 完善信息
userRouter.post('/perfectInfoById', async function(req, res, next) {
  const {body} = req
  try {
    const user = await UserModel.findByIdAndUpdate(body._id, body)
    const endUser = await UserModel.findOne({_id: user._id}, filter)
    res.json({
      data: endUser,
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

// 获取用户列表
userRouter.get('/getUserList', async function(req, res, next) {
  try {
    const list = await UserModel.find({}, filter)
    res.json({
      data: list,
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

//删除用户
userRouter.get('/removeUser', async function(req, res, next) {
  const _id = req.query._id
  try {
    const user = await UserModel.deleteOne({_id})
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

//搜索用户
userRouter.get('/search', async function(req, res, next) {
  const query = req.query
  const search = new RegExp(query.keyWords)
  const key = query.type
  try {
    const list = await UserModel.find({ [key]: search }, filter)
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

module.exports = userRouter
