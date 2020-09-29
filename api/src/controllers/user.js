const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { createUserToken } = require('../middleware/auth');
const { requireToken } = require('../middleware/auth');
const User = require('../User.model.js');

router.post('/signup', async (req, res, next) => {
	try {
		// console.log('req.body:', req.body);
		const password = await bcrypt.hash(req.body.password, 10);
		const user = await User.create({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password,
		});
		res.status(201).json(user);
	} catch (error) {
		return next(error);
	}
});

router.post('/signin', (req, res, next) => {
	User.findOne({ email: req.body.email })
		.then((user) => createUserToken(req, user))
		.then((token) => res.json({ token }))
		.catch(next);
});



module.exports = router;
