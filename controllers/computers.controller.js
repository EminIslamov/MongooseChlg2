const Computer = require('../models/Computer.model');

module.exports.computersController = {
  getComputers: (req, res) => {
    Computer.find().then((Computer) => {
      res.json(Computer)
    })
  },

  addComputer: (req, res) => {
    Computer.create({
      name: req.body.name,
      year: req.body.year,
      price: req.body.price
    }).then(() => {
      res.json('Computer was added')
    })
  },

  deleteComputer: (req, res) => {
    Computer.findByIdAndRemove(req.params.id).then(() => {
      res.json('Computer was deleted')
    })
  },

  updateComputer: (req,res) => {
    Computer.findByIdAndUpdate(req.params.id, {$set: {...req.body}}).then(() => {
      res.json('computer was changed')
    })
  }
}