const express = require('express');

const authRouter = express.Router();

authRouter.post('/', (req, res, next) => {
  const { email, password } = req.body;
});

module.exports = authRouter;
