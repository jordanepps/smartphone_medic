const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const userRouter = require('../routes/user/user.router');

const app = express();

//Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('tiny'));

//Routes
app.use('/api/users', userRouter);

app.use((error, req, res, next) =>
  res.status(500).json({ message: error.message, error })
);

module.exports = app;
