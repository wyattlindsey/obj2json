const JSON3dObject = require('../models/JSON-3d-object');

module.exports = {
  save: function(id) {
    return new Promise((resolve, reject) => {
      var obj = new JSON3dObject({
        id: id
      });
      obj.save((err) => {
        if (err) {
          console.error('database error: ', err);
          reject(err);
        } else {
          resolve(id);
        }
      });
    });

  }
};