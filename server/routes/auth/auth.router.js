require('dotenv').config();
const jwt = require('jsonwebtoken');
const express = require('express');
const User = require('../../models/user.model');

const authRouter = express.Router();

authRouter.post('/', (req, res, next) => {
  const { email, password } = req.body;
  const loginData = { email, password };

  //Check for required fields in request body
  for (const [key, value] of Object.entries(loginData))
    if (value == null)
      return res
        .status(400)
        .json({ error: `Missing '${key}' in request body` });

  //Check if account exists
  User.findOne({ email: email.toLowerCase() }).then(user => {
    if (!user)
      return res.status(400).json({ error: 'User account does not exist' });

    //Check if account is deleted
    //Check password
    if (!user.validPassword(password)) {
      return res.status(400).json({ error: 'Password is incorrect' });
    } else {
      jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.EXPIRY
        },
        (err, token) => {
          //TODO: Handle error
          if (err) throw err;
          req.flash('success', 'Login Successfully!');
          res.status(200).json({
            token,
            user: { id: user.id, name: user.name, email: user.email }
          });
        }
      );
    }

    //verify user
  });
});

module.exports = authRouter;
