const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const hostname = '127.0.0.1';

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});
app.get('/students', (request, response) => {
  countStudents(process.argv[2].toString()).then((output) => {
    response.send(['This is the list of our students', output].join('\n'));
  }).catch(() => {
    response.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(port, hostname, () => {
});

module.exports = app;
