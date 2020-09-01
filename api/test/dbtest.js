const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../src/User.model');

//test DB
describe('DB Test', function () {
	//Create a database connection before starting a test
	before(function (done) {
		mongoose.connect('mongodb://localhost/users');
		const db = mongoose.connection;
		db.on('error', console.error.bind(console, 'connection error'));
		db.once('open', function () {
			console.log('We are connected to test database!');
			//Once a connection is established invoke done()
			done();
		});
	});
	describe('Test Database', function () {
		//Save object with user name
		it('New name saved to test database', function (done) {
			var testUser = User({
				firstName: 'Jo',
			});

			testUser.save(done);
		});
		it('Should retrieve data from test database', function (done) {
			//Look up the user record 'Jo' previously saved.
			User.find(
				{
					name: 'Jo',
				},
				(err, name) => {
					if (err) {
						throw err;
					}
					done();
				}
			);
		});
	});
	//drop database and close connection after test
	after(function (done) {
		mongoose.connection.db.dropDatabase(function () {
			mongoose.connection.close(done);
		});
	});
});
