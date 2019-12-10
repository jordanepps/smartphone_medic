require('dotenv').config();
const jwt = require('jsonwebtoken');

const AuthService = {
  createToken(id, res) {
    jwt.sign(
      { id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.EXPIRY },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  }
};

module.exports = AuthService;
