const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../User.model.js');

router.post('/signup', async (req,res, next) =>{	
	const user = new User({
		username: req.body.name,
		email: req.body.email,
		password: req.body.password,
	});
	try {
		const savedUser = await user.save();
		res.send(savedUser);
	} catch (err) {
		return next(error)
	}
})


router.post('/login', (req, res) => {
	res.send('Succesfully logged in');
});

module.exports = router;
