const Router = require('express');
const router = new Router();
const postsController = require('../controller/posts.controller')

router.post('/', postsController.addPost);
router.get('/', postsController.getAllPost);
router.get('/:id', postsController.getOnePost);
router.put('/:id', postsController.updatePost);
router.delete('/:id', postsController.deletePost);

module.exports = router; 