const express = require('express')
const router = express.Router()
const companyController = require('../controllers/companyController')
const passportJWT = require('../middleware/passportJWT');
const checkAdmin = require('../middleware/checkAdmin')

router.get('/', companyController.index)

router.delete('/:id', companyController.destroy)
router.put('/:id', companyController.update)
router.get('/',[passportJWT.isLogin,checkAdmin.isAdmin], companyController.index )
router.post('/', companyController.insert)
router.get('/:id', companyController.show)
module.exports = router