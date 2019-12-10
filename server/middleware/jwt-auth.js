require('dotenv').config();
const jwt = require('jsonwebtoken');

function requireAuth(req, res, next) {
  const token = req.header('x-auth-token');
  //Check for token
  if (!token) return res.status(401).json({ error: 'Unauthorized Request' });

  try {
    //Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //Add user to payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ error: 'Token is not valid' });
  }
}

module.exports = requireAuth;
