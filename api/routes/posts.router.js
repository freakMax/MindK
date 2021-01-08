const Router = require('express');
const router = new Router();

router.get('/posts', (req, res) => {});
router.get('/posts/:id', (req, res) => {});
router.post('/posts', (req, res) => {});
router.put('/posts/:id', (req, res) => {});
router.delete('/posts/:id', (req, res) => {});

module.exports = router; 