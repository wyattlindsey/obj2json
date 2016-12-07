'use strict';

const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const upload = require('./controllers/upload');
const database = require('./controllers/database');
const convertObj = require('./controllers/convert-obj');
const saveJSON3dObject = require('./controllers/saveJSON3dObject');
const app = express();
const config = require('./config')();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../dist')));

app.post('/upload', fileUpload(), (req, res) => {
  var thisID;
  upload(req, res)
    .then((id) => {
      return database.save(id);
    })
    .then((id) => {
      thisID = id;
      return convertObj(`server/uploads/originals/${id}.obj`);
    })
    .then((data) => {
      return saveJSON3dObject(data, thisID);
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});