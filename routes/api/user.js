const express = require('express');
const router = express.Router();

//@route GET api/users
//@desc temprary route for user
router.get('/', (req, res)=> res.send('User Route'));

module.exports = router;