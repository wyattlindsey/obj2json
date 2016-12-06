'use strict';

const express = require('express');
const multer = require('multer');
const path = require('path');
const database = require('./controllers/database');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../dist')));

const upload = multer({
  dest: '/server/uploads'
});

app.post('/upload', (req, res) => {
  req.on('data', (chunk) => {
    console.log(chunk);
  });
  // let data = '';
  //
  // req.on('data', (chunk) => {
  //   data += chunk.toString();
  // });
  //
  // req.on('end', (data) => {
  //   console.log(data);
  //   res.sendStatus(201);
  // });
  // upload(req)
  //   .then(() => {
  //     res.send(201);
  //   })
  //   .catch((err) => {
  //     console.error(`upload error: ${err}`);
  //     res.send(422);
  //   });
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});