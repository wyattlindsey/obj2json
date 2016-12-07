const JSON3dObject = require('../models/JSON-3d-object');

module.exports = () => {
  return new Promise((resolve, reject) => {
    JSON3dObject.find({}, (err, objects) => {
      if (err) {
        console.err(err);
        reject(err);
      } else {
        resolve(
          objects.map((obj) => {
            return obj.id;
          })
        );
      }
    });
  });
};