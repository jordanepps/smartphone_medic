require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const UserService = require('./user.service');
const User = require('../../models/user.model');

const userRouter = express.Router();

userRouter.post('/', (req, res, next) => {
  const { name, email, password } = req.body;
  const newUserData = { email: email.toLowerCase(), name, password };

  //Check for required fields in request body
  for (const [key, value] of Object.entries(newUserData))
    if (value == null)
      return res
        .status(400)
        .json({ error: `Missing '${key}' in request body` });

  //Check for password errors in provided password.
  //length, empty spaces, casing, etc...
  const passwordError = UserService.validatePassword(password);

  if (passwordError) {
    req.flash('error', passwordError);
    return res
      .status(400)
      .json({ error: passwordError, msg: req.flash('error') });
  }

  //TODO:Check if user email is allowed to register

  //Check is email already exists
  User.findOne({ email }).then(user => {
    if (user) {
      //user exists
      // res.locals.error_messages = req.flash('error_messages');
      req.flash('error', 'Email is already registered');
      return res.status(400).json({
        error: 'Email is already registered',
        msg: req.flash('error')
      });
    } else {
      //Create new user
      const newUser = new User({ ...newUserData });
      //Hash password
      newUser.password = newUser.hashPassword(password);

      //Save user
      newUser
        .save()
        .then(user => {
          jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            {
              expiresIn: process.env.EXPIRY
            },
            (err, token) => {
              //TODO: Handle error
              if (err) throw err;
              req.flash('success', 'Registered Successfully!');
              res.status(201).json({
                token,
                user: { id: user.id, name: user.name, email: user.email },
                msg: req.flash('success')
              });
            }
          );
        })
        .catch(err => console.log(err));
    }
  });
});

module.exports = userRouter;
1;
