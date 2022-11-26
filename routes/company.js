var express = require('express');
const { company } = require('../controllers/userController');
var router = express.Router();


router.get('/', company);





module.exports = router;