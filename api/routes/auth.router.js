const Router = require('express');
const router = new Router();
const authController = require('../controller/auth.controller')
const validator = require('../middlewares/validator')

router.post('/registration', [validator({
    login: ['required', 'email', 'unique:users:login'],
    password: ['required', 'min:8', 'max:30'],
})],authController.registration)
router.post('/login', authController.login)
router.get('/checkAccept/*', authController.checkAccept)
router.post('/google-login', authController.GoogleLogin)
router.post('/facebook-login', authController.FacebookLogin)



module.exports = router; 