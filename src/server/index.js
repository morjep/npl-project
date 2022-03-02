const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
});

// designates what port the app will listen to for incoming requests
app.listen(8081, () => {
  console.log('Example app listening on port 8081!');
});

app.get('/test', (req, res) => {
  res.send(mockAPIResponse);
});