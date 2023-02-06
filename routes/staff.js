var express = require('express');
var router = express.Router();
const staffController = require('../controllers/staffController')
const { body } = require('express-validator');
const passportJWT = require('../middleware/passportJWT');



router.get('/', staffController.index);

/* http://localhost:3000/staff/63942ff97486162140a3bdf8 */
router.get('/:id', staffController.show);
router.delete('/:id', staffController.destroy);
router.put('/:id', staffController.update);
router.get('/', [passportJWT.isLogin],staffController.index )

router.post('/',[body('name').not().isEmpty().withMessage("Please enter name/sirname"),
                body('salary').not().isEmpty().withMessage("Please enter Salary").isNumeric().withMessage("Please Insert only number")
                
], staffController.insert);





module.exports = router;