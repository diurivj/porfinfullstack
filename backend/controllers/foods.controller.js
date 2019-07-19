const Food = require('../models/Food')

exports.getAllFoods = (req, res, next) => {
  Food.find()
    .then(foods => res.status(200).json({ foods }))
    .catch(err => res.status(500).json({ err }))
}

exports.getOneFood = (req, res, next) => {
  const { id } = req.params
  Food.findById(id)
    .then(food => res.status(200).json({ food }))
    .catch(err => res.status(500).json({ err }))
}

exports.createFood = (req, res, next) => {
  Food.create({ ...req.body })
    .then(food => res.status(201).json({ food }))
    .catch(err => res.status(500).json({ err }))
}

exports.updateFood = (req, res, next) => {
  const { id } = req.params
  Food.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then(food => res.status(200).json({ food }))
    .catch(err => res.status(500).json({ err }))
}

exports.deleteFood = (req, res, next) => {
  const { id } = req.params
  Food.findByIdAndDelete(id)
    .then(food => res.status(200).json({ food, msg: 'Food deleted' }))
    .catch(err => res.status(500).json({ err }))
}
