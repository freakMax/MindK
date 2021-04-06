const Router = require('express');
const router = new Router();
const userController = require('../controller/user.controller')

// router.get('/', userController.getAllUsers)
router.get('/:id', userController.getUserById)
router.get('/:id/avatar', userController.getUserImage)
router.post('/:id/avatar', userController.postUserImage)
router.put('/:id', userController.updateUser)

module.exports = router