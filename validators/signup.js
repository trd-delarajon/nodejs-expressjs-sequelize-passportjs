let models = require('../models');
let validator = require('validator');

const validateCreateUserFields = function(errors, req)
{
	if(!validator.isEmail(req.body.email))
	{
		errors["email"] = "error email";
	}
	if(!validator.isAscii(req.body.password))
	{
		errors["password"] = "Invalid char in password";
	}
	if(!validator.isLength(req.body.password, {min: 8, max: 25}))
	{
		errors["password"] = "Please ensure password is atleast 8 chars and max of 25 chars";
	}
}

exports.validateUser = function(errors, req){
	
	return new Promise(function(resolve, reject){
		validateCreateUserFields(errors,req);
		
		return models.User.findOne({
			where: {email: req.body.email}
		}).then(u => {
			if(u !== null)
			{
				errors["email"] = "email is already taken";
			}
			resolve(errors);
		})
	})
}