var express = require('express');
var router = express.Router();
const staffController = require('../controllers/staffController')


router.get('/', staffController.index);

/* http://localhost:3000/staff/63942ff97486162140a3bdf8 */
router.get('/:id', staffController.show);
router.delete('/:id', staffController.destroy);
router.put('/:id', staffController.update);

router.post('/', staffController.insert);





module.exports = router;