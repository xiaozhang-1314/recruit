const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/recruit', {useNewUrlParser: true, useUnifiedTopology: true})
const {Schema} = mongoose
module.exports = Schema