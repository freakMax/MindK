const Router = require('express');
const router = new Router();
const postsController = require('../controller/posts.controller')
const authMiddleware = require('../middlewares/authMiddleware')
const aclMiddleware = require('../middlewares/aclMiddleware')
const validator = require('../middlewares/validator')

router.post('/', [authMiddleware,validator({
    title:['required','min:1','max:30'],
    content:['required','min:1','max:300'],
    access:[['oneOf:me:friends:all']]})],postsController.addPost);
router.get('/', postsController.getAllPost);
router.get('/:id', postsController.getOnePost);
router.put('/:id', [authMiddleware,aclMiddleware([
    { permission: 'updateAnyPost' },
    { permission: 'updateOwnPost', ownerInfo: {table: 'posts', column: 'user_id'}}],
    validator({
        title:['required','min:1','max:30'],
        content:['required','min:1','max:300'],
        access:[['oneOf:me:friends:all']]}))],
    postsController.updatePost);
router.delete('/:id', [authMiddleware,aclMiddleware([
    { permission: 'deleteAnyPost' },
    { permission: 'deleteOwnPost', ownerInfo: {table: 'posts', column: 'user_id'}}])],
    postsController.deletePost);

module.exports = router; 