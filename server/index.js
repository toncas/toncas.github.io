const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});