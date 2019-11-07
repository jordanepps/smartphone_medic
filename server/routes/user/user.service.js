require('dotenv').config();
const jwt = require('jsonwebtoken');

const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/;

const UserService = {
  signUser(res, user) {
    jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.EXPIRY
      },
      (err, token) => {
        throw err;
        // if (err) throw err;
        // res.json({
        //   token,
        //   user: { id: user.id, name: user.name, email: user.email }
        // });
      }
    );
  },
  validatePassword(password) {
    if (password.length < 8) {
      return 'Password be longer than 8 characters';
    }
    if (password.length > 72) {
      return 'Password be less than 72 characters';
    }
    if (password.startsWith(' ') || password.endsWith(' ')) {
      return 'Password must not start or end with empty spaces';
    }
    if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
      return 'Password must contain 1 upper case, lower case, number and special character';
    }
    return null;
  }
};

module.exports = UserService;
