const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../User.model');

router.post('/signup', (req,res) =>{
	res.send('Succesfully signed up')
})

router.post('/login', (req, res) => {
	res.send('Succesfully logged in');
});

module.exports = router;
