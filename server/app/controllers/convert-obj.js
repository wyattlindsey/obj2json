const threeOBJ = require('three-obj')();

module.exports = (pathToFile) => {
  var id = id;
  return new Promise((resolve, reject) => {   // todo better error handling
    threeOBJ.load(pathToFile, (data) => {
      resolve(data);
    });
  });
};