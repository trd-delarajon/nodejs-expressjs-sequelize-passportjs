var express = require('express');
var router = express.Router();

let index = require('../Controllers/index');

/* GET home page. */
router.get('/', index.index);
router.post('/', index.submit_email);
router.get('/leads', index.show_leads);

module.exports = router;
