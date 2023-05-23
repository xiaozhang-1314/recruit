export default {
  saveChatInfo(state, chatInfo) {
    state.chatList = chatInfo.chatList
    state.users = chatInfo.users
  },
  send(state, obj) {
    state.chatList.push(obj)
  },
  changeStatus(state, { from, to }) {
    state.chatList.filter(item => item.from === from && item.to === to).forEach(obj => {
      obj.readed = true
    })
  },
  out(state) {
    state.chatList = []
    state.users = {}
  }
}