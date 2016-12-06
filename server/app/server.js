'use strict';

const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const upload = require('./controllers/upload');
const database = require('./controllers/database');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../dist')));

app.post('/upload', fileUpload(), (req, res) => {
  if (!req.files) {
    res.send('No files were uploaded');
    return;
  }

  req.files.file.mv(`server/uploads/originals/AS12_1.obj`, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.sendStatus(201);
    }


  });
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});