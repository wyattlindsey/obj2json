'use strict';

const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const upload = require('./controllers/upload');
const database = require('./controllers/database');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../dist')));

app.post('/upload', fileUpload(), upload);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});