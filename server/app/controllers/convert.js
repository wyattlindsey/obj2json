const threeOBJ = require('three-obj');

module.exports = (pathToFile) => {
  return new Promise((resolve) => {   // todo better error handling
    threeOBJ.load(pathToFile, (data) => {
      resolve(data);
    });
  });
};