var User = require('../models/user');

module.exports.signup = function(req, res,) {   
  const email = req.body.email;
  const password = req.body.password;
  User.save(function(err, result) {
		if(err){
			res.send(err);
		}
		res.json(result);
	});
};
