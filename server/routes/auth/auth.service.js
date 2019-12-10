require('dotenv').config();
const jwt = require('jsonwebtoken');

const AuthService = {
  createToken(id) {
    return new Promise((resolve, reject) => {
      jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.EXPIRY },
        (err, token) => {
          if (err) reject(err);
          resolve(token);
        }
      );
    });
  }
};

module.exports = AuthService;
