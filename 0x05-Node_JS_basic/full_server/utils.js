const fs = require('fs').promises;

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const students = data
          .split('\n')
          .filter((student) => student.length > 0)
          .map((student) => student.split(','));

        students.shift();
        const stats = {};
        students.forEach((student) => {
          if (!stats[student[3]]) stats[student[3]] = [];
          stats[student[3]].push(student[0]);
        });
        resolve(stats);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

export default readDatabase;
