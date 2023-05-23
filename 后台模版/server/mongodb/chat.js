const mongoose = require('mongoose')
const Schema = require('./index')

const chatSchema = new Schema({
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  chat_id: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  readed: {
    type: Boolean,
    default: false
  },
  create_time: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Chat', chatSchema)
