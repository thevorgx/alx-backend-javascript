const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const hostname = '127.0.0.1';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];

  res.write('This is the list of our students');

  if (!databasePath) {
    res.end('Error: No database file path provided');
  } else {
    countStudents(databasePath)
      .then(() => {
        res.end();
      })
      .catch((err) => {
        res.end(`${err.message}\n`);
      });
  }
});

app.listen(port, hostname, () => {
});

module.exports = app;
