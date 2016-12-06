'use strict';

const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const upload = require('./controllers/upload');
const database = require('./controllers/database');
const convertObj = require('./controllers/convert-obj');
const app = express();
const config = require('./config')();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../dist')));

app.post('/upload', fileUpload(), (req, res) => {
  upload(req, res)
    .then((fileGUID) => {
      database.save(fileGUID);
    })
    .then((fileGUID) => {
      convertObj(fileGUID);
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});