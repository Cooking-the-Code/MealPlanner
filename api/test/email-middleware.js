const should = require('chai').should();
const expect = require('chai').expect;
const MockExpress = require('mock-express');
const app = MockExpress(); // notice there's no "new"

app.get('/test', (req,res, done)=>{
  //Middleware for validating
  // console.log('Validation middleware here for signup');
  res.send('is Validated');
}, function(req, res, next) {
	var model = { name: 'world'};
  console.log(res)
	if (req.query.start === 'true') {
    console.log('hey')
		res.render('index', model);
	} else {
    console.log('yo')
		res.redirect('http://www.google.com');
	}

});

describe('Email validation suit', (done) => {
  var req = app.makeRequest({ 'host': 'http://localhost:5343' });
  var res = app.makeResponse(function(err, sideEffects) {
	assertEqual(sideEffects.model.name, 'world');
	done(); // this is the callback used by mocha to indicate test completion
  });

  // If email exists in the database and is validated
  it('After user signs up and', ()=>{
    app.invoke('get', '/test?start=true', req, res);
  });

  // If email doesnt exist in database and isnt validated
  it('Email when user signs up', () => {
    // app
  });
  // If email doesnt exist in database and is validated
  // it('')
})