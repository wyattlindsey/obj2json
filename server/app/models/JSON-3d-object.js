const mongoose = require('mongoose');
const db = require('../config');

const JSON3dObjectSchema = mongoose.Schema({
  fileGUID: String
});

module.exports = mongoose.model('JSON3dObject', JSON3dObjectSchema);