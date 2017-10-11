var readline = require('readline');
var Database = require('better-sqlite3');
var options = {}
var db = new Database('applicants.sqlite3', options);

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter the start date : ', function(startDate) {
  rl.question('Please enter the end date : ', function(endDate) {
    console.log(`start date: ${startDate} \nend date: ${endDate}`);
    rl.close();
  });
});

var row = db.exec('SELECT * FROM applicants');
// console.log(row);
