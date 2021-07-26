const { Router } = require('express')
const router = Router()

const { phonesController } = require('../controllers/phones.controller')


router.get('/phones', phonesController.getPhones)

router.post('/phones', phonesController.addPhone)

router.delete('/phones/:id', phonesController.deletePhone)

router.patch('/phones/:id', phonesController.updatePhone)

module.exports = router;