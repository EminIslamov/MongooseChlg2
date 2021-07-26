const { Router } = require("express");
const route = Router();

const { clothesController } = require("../controllers/clothes.controller");

route.get("/clothes", clothesController.getClothes);

route.post("/clothes", clothesController.addClothes);

route.delete("/clothes/:id", clothesController.deleteClothes);

route.patch("/clothes/:id", clothesController.updateClothes);

module.exports = route;
