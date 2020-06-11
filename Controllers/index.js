exports.index = function(req, res, next) {
  res.render('index', { title: 'Express' });
}exports.submit_email = function(req, res, next) {  console.log("submit email:", req.body.email);  res.redirect('/');}