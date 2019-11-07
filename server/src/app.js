const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');

const userRouter = require('../routes/user/user.router');

const app = express();
let sess = {
  secret: 'spm secret',
  resave: true,
  saveUninitialized: true,
  cookie: {}
};

if (app.get('env') === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

//Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('tiny'));
app.use(session(sess));
app.use(flash());

//Global flash vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success');
  res.locals.error_msg = req.flash('error');
  next();
});

//Routes
app.use('/api/users', userRouter);

app.use((error, req, res, next) =>
  res.status(500).json({ message: error.message, error })
);

module.exports = app;
