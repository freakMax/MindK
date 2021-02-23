const Router = require('express');
const router = new Router();
const authController = require('../controller/auth.controller')
const {check} = require('express-validator')

router.post('/registration', [
    check('login','Имя пользователя не должно быть пустым').notEmpty(),
    check('password','Пароль пользователя не должно быть пустым').notEmpty()
],authController.registration)
router.post('/login', authController.login)
router.get('/checkAccept/*', authController.checkAccept)
router.post('/google-login', authController.GoogleLogin)
router.post('/facebook-login', authController.FacebookLogin)


module.exports = router; 