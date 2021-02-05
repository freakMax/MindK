const Router = require('express');
const router = new Router();
const postsController = require('../controller/posts.controller')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/', authMiddleware,postsController.addPost);
router.get('/', postsController.getAllPost);
router.get('/:id', postsController.getOnePost);
router.put('/:id', authMiddleware,postsController.updatePost);
router.delete('/:id', authMiddleware,postsController.deletePost);

module.exports = router; 