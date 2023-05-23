const socket = require('socket.io')
const ChatModel = require('../mongodb/chat')

module.exports = function(server) {
  const io = socket(server, { cors: true })
  let res = {}
  io.on('connection', function (socket) {
    console.log('soketio connected') 
    // 绑定 sendMsg 监听, 接收客户端发送的消息 
    socket.on('sendMsg', async function (data) {
      console.log('服务器接收到浏览器的消息', data)
      res = await new ChatModel(data).save()
      // console.log(res)
    // 向客户端发送消息(名称, 数据) 
    io.emit('receiveMsg', res)
      console.log('服务器向浏览器发送消息', res)
    }) 
  })
}