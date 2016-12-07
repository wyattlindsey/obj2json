const mongoose = require('mongoose');
const db = require('../config');

const JSON3dObjectSchema = mongoose.Schema({
  id: String
});

module.exports = mongoose.model('JSON3dObject', JSON3dObjectSchema);