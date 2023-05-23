const mongoose = require('mongoose')
const Schema = require('./index')

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1688272823,3962891762&fm=26&gp=0.jpg'
  },
  type: {
    type: String,
    required: true,
    default: 'worker'
  },
  info: {
    type: String,
  },
  post: {
    type: String
  },
  salary: {
    type: String
  },
  company: {
    type: String
  }
})

module.exports = mongoose.model('User', userSchema)
