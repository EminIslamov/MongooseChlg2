const Clothes = require("../models/Clothes.model");
module.exports.clothesController = {
  getClothes: (req, res) => {
    Clothes.find().then((Clothes) => res.json(Clothes));
  },

  addClothes: (req, res) => {
    Clothes.create({
      name: req.body.name,
      size: req.body.size,
      remainingGoods: req.body.remainingGoods,
    }).then((Clothes) => {res.json(Clothes)})
  },

  deleteClothes: (req, res) => {
    Clothes.findByIdAndRemove(req.params.id).then(() => {
      res.json('Clothes deleted')
    })
  },

  updateClothes: (req, res) => {
    Clothes.findByIdAndUpdate(req.params.id, {$set: {...req.body}}).then(() => {
      res.json('Clothes was changed')
    })
  },
};
