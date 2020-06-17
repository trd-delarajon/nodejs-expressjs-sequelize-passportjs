const models = require('../models');exports.index = function(req, res, next) {
  res.render('index', { title: 'Express' });
}exports.submit_email = function(req, res, next) {	return models.Lead.create({		email: req.body.email	}).then(lead => {		res.redirect('/');	})}