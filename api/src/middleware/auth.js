const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Create a secret to be used to encrypt/decrypt the token

const secret = 'supersecret';

const { Strategy, ExtractJwt } = require('passport-jwt');

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: secret,
};

// Require the user model
const User = require('../User.model');

const strategy = new Strategy(opts, function (jwt_payload, done) {
	User.findById(jwt_payload.id)
		.then((user) => done(null, user))
		.catch((err) => done(err));
});

passport.use(strategy);

passport.initialize();

const requireToken = passport.authenticate('jwt', { session: false });

const createUserToken = (req, user) => {
	if (
		!user ||
		!req.body.password ||
		!bcrypt.compareSync(req.body.password, user.password)
	) {
		const err = new Error('The provided username or password is incorrect');
		err.statusCode = 422;
		throw err;
	}
	return jwt.sign({ id: user._id }, secret, { expiresIn: 36000 });
};

module.exports = {
	requireToken,
	createUserToken,
};
