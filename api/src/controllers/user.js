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
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password,
		});
		//Sends an email
		sendEmail(user.email);
		res.status(201).json(user);
	} catch (error) {
		return next(error);
	}
});

//Sends json token - NEEDS TO BE DECODED on FRONT END &
router.post('/signin', (req, res, next) => {
	User.findOne({ email: req.body.email })
		.then((user) => {
			if(user.validated) return createUserToken(req, user);
			const err = new Error('The provided user is not validated.');
			err.statusCode = 403;
			throw err;
		})
		.then((token) => res.json({ token }))
		.catch(err=>next(err));
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
