const express = require('express');

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

  res.status(200).json(loginData);

  //Check if account is deleted
  //Check password
  //verify user
});

module.exports = authRouter;
