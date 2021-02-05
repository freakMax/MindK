const Router = require('express');
const router = new Router();
const postsController = require('../controller/posts.controller')
const authMiddleware = require('../middlewares/authMiddleware')
const checkAuth = require('../middlewares/checkAuth')

router.post('/', authMiddleware,postsController.addPost);
router.get('/', postsController.getAllPost);
router.get('/:id', postsController.getOnePost);
router.put('/:id', [authMiddleware,checkAuth],postsController.updatePost);
router.delete('/:id', [authMiddleware,checkAuth],postsController.deletePost);

module.exports = router; 