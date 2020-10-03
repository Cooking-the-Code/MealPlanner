const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { createUserToken } = require('../middleware/auth');
const { requireToken } = require('../middleware/auth');
const { sendEmail } = require('../middleware/validateEmail');
const { validateEmail } = require('../middleware/validateEmail');

const User = require('../User.model.js');

router.post('/signup', async (req, res, next) => {
	try {
		// console.log('req.body:', req.body);
		const password = await bcrypt.hash(req.body.password, 10);
		const user = await User.create({
			username:req.body.username, // Is username necessary?
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password,
		});
		//Sends an email
		sendEmail(user.email, user.username);
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

// Validates email
router.put('/validate/:email', (req,res, next) => {
	validateEmail(req.params.email)
		.then(results=> {
			//If email doesn't exist in database send 404
			if (!results) res.sendStatus(404);
			//otherwise  send 200 status, data should be updated
			res.sendStatus(200);
		})
		.catch(err=> {
			return next(err);
			res.sendStatus(404);
		})
});


module.exports = router;
