const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use((error, req, res, next) =>
  res.status(500).json({ message: error.message, error })
);

module.exports = app;
