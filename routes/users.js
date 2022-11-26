var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Hello World');
  res.status(200).json({
    fullame: 'Channawat',
   })
});
router.get('/bio', function(req, res, next) {
  //res.send('Hello World');
  res.status(200).json({
    fullame: 'Channawat',
    nickname: 'Keng',
    hobby: 'ROeveryday',
    gitusername: 'Channawatjwrld'
   })
});


module.exports = router;
