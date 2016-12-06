const request = require('superagent');

module.exports = (files) => {
  let file = files[0];    // todo loop through all accepted files

  return new Promise((resolve, reject) => {
    request
      .post('/upload')
      .field('name', 'OBJfile')
      .field('file', file)
      .end((err, data) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(data);
        }
      });
  });

};