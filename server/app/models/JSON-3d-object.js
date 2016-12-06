const db = require('../config');
const mongoose = require('mongoose');

const JSON3dObjectSchema = mongoose.Schema({
  _id: ObjectId,
  filename: String,
  data: String
});

module.exports = mongoose.model('JSON3dObject', JSON3dObjectSchema);