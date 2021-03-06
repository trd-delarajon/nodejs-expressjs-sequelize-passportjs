var express = require('express');
var router = express.Router();

let index = require('../Controllers/index');
let user = require('../Controllers/user');
let {isLoggedIn, hasAuth} = require('../middleware/hasAuth.js');

/* GET home page. */
router.get('/', index.index);
router.post('/', index.submit_email);
router.get('/leads', hasAuth, index.show_leads);
router.get('/lead/:lead_id', index.show_lead);
router.get('/lead/edit/:lead_id', index.show_lead_edit);
router.post('/lead/edit/:lead_id', index.lead_edit);
router.post('/lead/delete/:lead_id', index.lead_delete);
router.post('/lead/delete-ajax/:lead_id', index.lead_delete_ajax);


router.get('/login', user.show_login);
router.get('/signup', user.show_signup);
router.post('/login', user.login);
router.post('/signup', user.signup);
router.post('/logout', user.logout);
router.get('/logout', user.logout);

module.exports = router;
