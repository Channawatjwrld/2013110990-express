var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();
const { body } = require('express-validator');


/* GET users listing. */
router.get('/', userController.index);
router.get('/bio', userController.bio);
router.post('/',[body('name').not().isEmpty().withMessage("Please enter name/sirname"), 
                body('email').not().isEmpty().withMessage("Please enter Email").isEmail().withMessage("Invalid Email type"),
                body('password').not().isEmpty().withMessage("Please enter password").isLength({min:5}).withMessage("Password must more than 5 length")
                ],userController.register);
router.post('/login',[body('email').not().isEmpty().withMessage("Please enter Email").isEmail().withMessage("Invalid Email type"),
body('password').not().isEmpty().withMessage("Please enter password").isLength({min:5}).withMessage("Password must more than 5 length")
],userController.login)



module.exports = router;
