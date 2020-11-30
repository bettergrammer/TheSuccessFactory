const express = require('express');
const bodyParser = require('body-parser');
const Path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(Path.join(`${__dirname}/../public`)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});