const validator = require("validator");

const validateSignupData = (email, password, username) => {
  if (!email || !password || !username) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Passoword not strong enough");
  }
};

module.exports = { validateSignupData };
