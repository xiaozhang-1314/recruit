const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./routes/user')
const chatRouter = require('./routes/chat')
const config = require('./config')

const app = express()

const server = require('http').createServer(app)
const Io = require('./socket')
Io(server)

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(userRouter)
app.use(chatRouter)

// 路由路径匹配失败
app.use(function(req, res) {
  res.status(500).json({
    meta: {
      code: 2,
      status: 404,
      msg: 'Not Found'
    }
  })
})

// 服务器错误
app.use(function(err, req, res, next) {
  res.status(500).json({
    meta: {
      code: 3,
      status: 500,
      msg: '服务器忙,请稍后重试'
    }
  })
})


server.listen(config.port, function() {
  console.log('success---http://localhost:4000')
})