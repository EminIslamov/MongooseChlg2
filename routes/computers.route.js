const { Router } = require("express");
const { computersController } = require("../controllers/computers.controller");

const router = Router();

router.get("/computers", computersController.getComputers);
router.post("/computers", computersController.addComputer);
router.delete("/computers/:id", computersController.deleteComputer);
router.patch("/computers/:id", computersController.updateComputer);

module.exports = router;