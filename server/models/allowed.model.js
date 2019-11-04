const mongoose = require('mongoose');

const AllowedSchema = new mongoose.Schema({
  email: {
    type: String
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Allowed', AllowedSchema);
