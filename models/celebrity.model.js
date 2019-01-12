const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  occupation: {
    type: String,
    default: 'unknown',
    required: true,
  },
  catchPhrase: {
    type: String,
    required: true
  }
})