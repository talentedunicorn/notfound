const mongoose = require('mongoose')

const templateSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  slug: String
})

module.exports = mongoose.model('Template', templateSchema)
