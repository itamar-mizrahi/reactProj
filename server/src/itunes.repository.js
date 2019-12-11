const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://theitamarmizrahi:3519902786a@cluster0-iapps.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(connectionString);
const Schema = require('./itunes.schema.js')
const User = mongoose.model('user', Schema, 'user')

async function createUser(username) {
  return new User({
    username,
  }).save()
}

async function findUser(username) {
  return await User.findOne({ username })
}

;(async () => {
  const connector = mongoose.connect(connectionString)
  const username = process.argv[2].split('=')[1]

  let user = await connector.then(async () => {
    return findUser(username)
  })

  if (!user) {
    user = await createUser(username)
  }

  console.log(user)
  process.exit(0)
})()
