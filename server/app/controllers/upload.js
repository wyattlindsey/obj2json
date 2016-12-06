const uuid = require('node-uuid');

module.exports = (req, res) => {
  if (!req.files) {
    res.send('No files were uploaded');
    return;
  }

  const file = req.files.file;
  const fileName = uuid.v4();

  file.mv(`server/uploads/originals/${fileName}.obj`, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.sendStatus(201);
    }
  });
};