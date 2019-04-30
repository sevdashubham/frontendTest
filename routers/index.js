var express = require('express');
var router = express.Router();

var data = require('../exercise_assets/frontend.json')
router.get('/', function(req, res) {
  res.render('index', data)
});

module.exports = router;
