var express = require('express');
const { index, bio } = require('../controllers/userController');
var router = express.Router();


/* GET users listing. */
router.get('/', index);
router.get('/bio', bio);


module.exports = router;
