export default {
  data() {
    return {
      showToast: false,
      toastContent: ''
    }
  },
  methods: {
    open(text, time=1500) {
      this.toastContent = text
      this.showToast = true
      setTimeout(() => {
        this.showToast = false
      }, time)
    }
  }
}