const express = require('express');
const User = require('../../models/user.model');

const authRouter = express.Router();

authRouter.post('/', (req, res, next) => {
  const { email, password } = req.body;
  const loginData = { email: email.toLowerCase(), password };

  //Check for required fields in request body
  for (const [key, value] of Object.entries(loginData))
    if (value == null)
      return res
        .status(400)
        .json({ error: `Missing '${key}' in request body` });

  //Check if account exists
  User.findOne({ email }).then(user => {
    if (!user)
      return res.status(400).json({ error: 'User account does not exist' });

    //Check if account is deleted
    //Check password
    console.log(User.validPassword);
    //verify user

    res.status(200).json(loginData);
  });
});

module.exports = authRouter;
