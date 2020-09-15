const expect = require("chai").expect;
const User = require("../api/src/User.model");

describe("User Schema", function() {
  //Save object with user name
  it("New name saved to test database", function(done) {
    var testUser = User({
      firstName: "Jo",
    });

    testUser.save(done);
    done();
  });
  it("Should retrieve data from test database", function(done) {
    //Look up the user record 'Jo' previously saved.
    User.find(
      {
        name: "Jo",
      },
      (err, name) => {
        if (err) {
          throw err;
        }
        done();
      }
    );
    done();
  });

  xit("should throw error when the user email already exsits", function() {});
});
