var express = require('express');
var router = express.Router();

let index = require('../Controllers/index');

/* GET home page. */
router.get('/', index.index);
router.post('/', index.submit_email);
router.get('/leads', index.show_leads);
router.get('/lead/:lead_id', index.show_lead);
router.get('/lead/edit/:lead_id', index.show_lead_edit);
router.post('/lead/edit/:lead_id', index.lead_edit);
router.post('/lead/delete/:lead_id', index.lead_delete);

module.exports = router;
