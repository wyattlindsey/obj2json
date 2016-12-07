const request = require('superagent');

module.exports = (path) => {
  return new Promise((resolve, reject) => {
    request
      .get(`/${path}`)
      .end((err, data) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        resolve(data);
      });
  });
}