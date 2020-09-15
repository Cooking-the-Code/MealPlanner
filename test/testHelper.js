const mongoose = require("mongoose");
const chai = require("chai");

const MONOGO_URL = process.env.MONOGO_URL || "mongodb://localhost/tests";

describe("DB Test", function() {
  //Create a database connection before starting a test
  before(function(done) {
    mongoose.connect(MONOGO_URL, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error"));
    db.once("open", function() {
      console.log("We are connected to test database!");
      //Once a connection is established invoke done()
      done();
    });
  });

  //drop database and close connection after test
  after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      mongoose.connection.close(done);
    });
  });
});
