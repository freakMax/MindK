const Router = require('express');
const router = new Router();
const postsController = require('../controller/posts.controller')
const authMiddleware = require('../middlewares/authMiddleware')
const aclMiddleware = require('../middlewares/aclMiddleware')

router.post('/', authMiddleware,postsController.addPost);
router.get('/', postsController.getAllPost);
router.get('/:id', postsController.getOnePost);
router.put('/:id', [authMiddleware,aclMiddleware([
    { permission: 'updateAnyPost' },
    { permission: 'updateOwnPost', userPost: {table: 'posts', column: 'user_id'}}])],
    postsController.updatePost);
router.delete('/:id', [authMiddleware,aclMiddleware([
    { permission: 'deleteAnyPost' },
    { permission: 'deleteOwnPost', userPost: {table: 'posts', column: 'user_id'}}])],
    postsController.deletePost);

module.exports = router; 