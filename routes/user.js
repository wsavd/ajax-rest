var express = require('express');
var router = express.Router();

var authentication_controller = require('../controllers/signup.controller')

router.post('/signup', authentication_controller.signup);

//.get to signup for form

module.exports = router;