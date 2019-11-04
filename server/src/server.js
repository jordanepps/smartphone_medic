require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');
const { PORT } = require('./config');

const uri = process.env.ATLAS_URI;

//Connect to Mongo
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connection established successfully!'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
