const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required']
  },
})

module.exports = Schema