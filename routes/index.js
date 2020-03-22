var express = require('express');
var router = express.Router();
var authController = require('../Controllers/AuthController');
var authMiddleware = require('../MIddleware/AuthMiddleware');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.post('/auth/verifyuser', authController.verifyUser);

router.post('/auth/validate', authController.validate_token);
router.get('/hello', authMiddleware.Validate, authController.simple_hello);
module.exports = router;
