var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shopController');

/* GET home page. */
router.get('/', shopController.index);
router.get("/menu",shopController.menu);
router.get('/:id', shopController.show);

router.post('/', shopController.insert);

module.exports = router;