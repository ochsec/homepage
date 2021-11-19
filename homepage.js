require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/hello', (req, res) => {
  res.send("Hello");
});

app.get('/cv', (req, res) => {
  var path = __dirname + '/cv.md';
  fs.readFile(path, 'utf8', function(err, data) {
    if(err) {
      console.log(err);
    }
    res.send(marked(data));
  });
});

app.get('/cv/download', (req, res) => {
  res.download('./Christopher Ochsenreither CV.pdf');
});

app.get('*', (req, res) => {
    res.render('index', { title: 'ochsec.info' });
});

app.listen(port, () => console.log(`Homepage running at http://localhost:${port}`))
