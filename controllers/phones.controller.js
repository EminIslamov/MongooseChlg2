const Phone = require('../models/Phone.model')

module.exports.phonesController = {
  getPhones: (req, res) => {
    Phone.find().then((Element) => {
      res.json(Element)
    })
  },

  addPhone: (req, res) => {
    Phone.create({
      name: req.body.name,
      color: req.body.color,
      price: req.body.price
    }).then(() => {
      res.json('phone was added')
    })
},

  deletePhone: (req, res) => {
     Phone.findByIdAndRemove(req.params.id).then(() => {
       res.json('Phone was deleted')
     })
  },

  updatePhone: (req, res) => {
     Phone.findByIdAndUpdate(req.params.id, {$set: {...req.body}}).then(() => {
       res.json('phone was changed')
     })
  }
}