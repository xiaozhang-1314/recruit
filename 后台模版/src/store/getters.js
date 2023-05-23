import { getInfo } from 'utils/optInfo'
import handleArr from 'utils/handleArr'

export default {
  renderChat(state) {
    const _id = getInfo('__user__')._id
    if(!_id) {
      return []
    }
    let arr = state.chatList.filter(item => item.chat_id.includes(_id))
    return handleArr(arr)
  },
  totalUnRead(state, getters) {
    return (_id) => {
      if(!_id) return 0
      let num = 0
      Object.values(getters.renderChat).forEach(item => {
        num += item.filter(obj => {
          return obj.to === _id && !obj.readed
        }).length
      })
      return num
    }
  }
}
