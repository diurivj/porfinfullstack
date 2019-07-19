const { Schema, model } = require('mongoose')

const foodSchema = new Schema(
  {
    name: String,
    dishType: String,
    flavor: String,
    price: Number
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Food', foodSchema)
