const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { createUserToken } = require('../middleware/auth');
const { requireToken } = require('../middleware/auth');
const User = require('../User.model.js');

router.post('/signup', async (req, res, next) => {
	try {
		console.log('req.body:', req.body);
		const password = await bcrypt.hash(req.body.password, 10);
		const user = await User.create({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			password,
		});
		res.status(201).json(user);
	} catch (error) {
		return next(error);
	}
});




module.exports = router;
