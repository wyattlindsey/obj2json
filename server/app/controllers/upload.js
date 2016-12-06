const uuid = require('node-uuid');

module.exports = (req, res) => {
  return new Promise((resolve, reject) => {
    if (!req.files) {
      res.send('No files were uploaded');
      return;
    }

    const file = req.files.file;
    const fileGUID = uuid.v4();

    file.mv(`server/uploads/originals/${fileGUID}.obj`, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
        reject(err);
      } else {
        res.sendStatus(201);
        resolve(fileGUID);
      }
    });
  });
};