require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');
const { PORT } = require('./config');

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () =>
  console.log('MongoDB connection established successfully!')
);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
