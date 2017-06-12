var express = require('express');
var router = express.Router();
var db = require('../queries');

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Credit Report API' });
})

router.get('/personalinformation', db.getAllUserInformation);
router.get('/personalinformation/:id', db.getOneUserInformation);
router.get('/financialinformation/', db.getAllUserAccounts);
router.get('/financialinformation/:id', db.getOneUserAccounts);

module.exports = router;