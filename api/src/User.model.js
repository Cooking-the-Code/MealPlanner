const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
	/* username: {
		type: String,
		required: true,
		unique: true,
	},
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	}, */
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		require: true,
  },
  validated: {
    type: Boolean,
    default: false
  },
	recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'recipe' }],
});

//pre save hook for hashing the password before saving it to the database
userSchema.pre("save", async function(next) {
	const User = this;
  if (!this.isModified("password")) {
    return next();
  }
  bcrypt.hash(this.password, 10, (err, passwordHashed) => {
    if (err) {
      return next(err);
    }
    this.password = passwordHashed;
    next();
  });
});

//validating the password entered by user to the password stored in db
userSchema.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return cb(err);
    } else {
      if (!isMatch) {
        return cb(null, isMatch);
      }
      return null, this; //this is the user
    }
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
