const request = require('superagent');

module.exports = {
  uploadOBJ: function(files) {
    return new Promise((resolve, reject) => {
      let req = request.post('/upload');

      files.forEach((file) => {
        // todo verify that file is a .OBJ
        req.attach(file.name, file);
      });
      req.end((err, data) => {
        if (err) { reject(err); }
        resolve(data);
      });
    });
  }
}