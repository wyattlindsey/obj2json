const mongoose = require('mongoose');
const JSON3dObject = require('../models/JSON-3d-object');

module.exports = {
  save: function(fileGUID) {
    return new Promise((resolve, reject) => {
      var obj = new JSON3dObject({
        fileGUID: fileGUID
      });
      obj.save((err, fileGUID) => {
        if (err) {
          console.error('database error: ', err);
          reject(err);
        } else {
          resolve(fileGUID);
        }
      })
    });

  }
};