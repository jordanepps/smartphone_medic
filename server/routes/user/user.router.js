const express = require('express');
const UserService = require('./user.service');

const userRouter = express.Router();

userRouter.post('/', (req, res, next) => {
  const { email, password } = req.body;
  const newUserData = { email, password };

  //Check for required fields in request body
  for (const [key, value] of Object.entries(newUserData))
    if (value == null)
      return res
        .status(400)
        .json({ error: `Missing '${key}' in request body` });

  //Check for password errors in provided password.
  //length, empty spaces, casing, etc
  const passwordError = UserService.validatePassword(password);

  if (passwordError) return res.status(400).json({ error: passwordError });
});

module.exports = userRouter;
