const router = require('express').Router();

//importando as controllers
const UserController = require('./controllers/UserController')

router.post('/login', UserController.login)
router.post('/create', UserController.create)


module.exports = router