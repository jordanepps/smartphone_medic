const express = require('express');
const User = require('../../models/user.model');
const requireAuth = require('../../middleware/jwt-auth');
const AuthService = require('./auth.service');

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

    //Check password
    if (!user.validPassword(password)) {
      return res.status(400).json({ error: 'Password is incorrect' });
    } else {
      AuthService.createToken(user.id)
        .then(token =>
          res.status(200).json({
            token,
            user: { id: user.id, name: user.name, email: user.email }
          })
        )
        .catch(err => console.log(err));
    }
  });
});

authRouter.get('/user', requireAuth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
});

authRouter.get('/refresh', requireAuth, (req, res) => {
  AuthService.createToken(req.user.id)
    .then(token => res.json({ token }))
    .catch(err => console.log(err));
});

module.exports = authRouter;
