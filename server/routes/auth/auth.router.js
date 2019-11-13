const express = require('express');

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

  //Check if account is deleted
  //Check password
  //verify user
});

module.exports = authRouter;
