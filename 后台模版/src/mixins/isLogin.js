import { getInfo } from 'utils/optInfo'

export default {
  data() {
    return {
      logined: false,
    }
  },
  activated() {
    const info = getInfo('__user__')
    if(info._id) {
      this.logined = true
    } else {
      this.logined = false
    }
  }
}