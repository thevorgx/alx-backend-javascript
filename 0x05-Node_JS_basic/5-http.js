const http = require('http');

const url = require('url');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;
const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!\n');
  } else if (parsedUrl.pathname === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');

    const databasePath = process.argv[2];

    if (!databasePath) {
      res.end('Error: No database file path provided\n');
    } else {
      countStudents(databasePath)
        .then(() => {
          res.end();
        })
        .catch((err) => {
          res.end(`${err.message}\n`);
        });
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found\n');
  }
});

app.listen(port, hostname, () => {
});

module.exports = app;
