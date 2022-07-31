const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Oops, invalid email address");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  //check if user alredy exists in our db:
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("User already exists with that email address");
  }

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await this.create({
    email,
    password: hashedPassword,
  });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be required");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("No user found with that email address");
  }

  const correctPassword = await bcrypt.compare(password, user.password);

  if (!correctPassword) {
    throw Error("Oops, invalid password.");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
