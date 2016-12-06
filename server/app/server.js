'use strict';

const express = require('express');
const path = require('path');
const upload = require('./controllers/upload');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../dist')));

app.post('/upload', (req, res) => {
  upload(req)
    .then(() => {
      res.send(201);
    })
    .catch((err) => {
      console.error(`upload error: ${err}`);
      res.send(422);
    });
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});