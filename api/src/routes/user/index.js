const router = require('express').Router();

router.post('/register', require('./registerUser'));
router.post('/login', require('./loginUser'));


module.exports = router;