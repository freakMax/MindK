const Router = require('express');
const router = new Router();
const authController = require('../controller/auth.controller')
const {check} = require('express-validator')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/registration', [
    check('login','Имя пользователя не должно быть пустым').notEmpty(),
    check('password','Пароль пользователя не должно быть пустым').notEmpty()
],authController.registration)
router.post('/login', authController.login)
router.get('/users', authMiddleware,authController.getUsers)


module.exports = router; 