const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/server/db');
const db = mongoose.connection;

(function(options) {
  db.on('error', (err) => { console.error(`Database error: ${err}`); });
  db.once('open', () => { console.log('database open'); });
})();

module.exports = db;