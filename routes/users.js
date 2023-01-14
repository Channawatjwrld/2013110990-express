var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();


/* GET users listing. */
router.get('/', userController.index);
router.get('/bio', userController.bio);
router.post('/',userController.register)


module.exports = router;
