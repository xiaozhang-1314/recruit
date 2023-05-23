import { getChatlist } from 'api'
import socket from '../socket'

export default {
  async getChatInfo(context) {
    const res = await getChatlist()
    if(res.meta.code === 0) {
      context.commit('saveChatInfo', res.data)
    }
    socket.on('receiveMsg', (data) => {
      context.commit('send', data)
    })
  }
}