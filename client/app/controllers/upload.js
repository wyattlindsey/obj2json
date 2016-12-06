const request = require('superagent');
const path = require('path');

module.exports = (files) => {
  let file = files[0];

  request
    .post('/upload')
    .field('file', file)
    .end((err, data) => {
      if (err) { console.error(err); }
      console.log(data);
    });

  // return new Promise((resolve, reject) => {
  //   request
  //     .post('/upload')
  //     .field('file', file)
  //     .end((err, data) => {
  //       console.log(data);
  //     });
  // });

};