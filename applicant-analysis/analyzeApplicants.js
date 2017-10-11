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

// Approach:
// 1. Ingest the file into the database
// 2. Create an empty object to store the counts by week and event (intended output object show below)
// 3. For each row, figure out which week grouping it belongs in. Then, figure out which workflow_state bucket it belongs in.
// If the week grouping or workflow_state bucket do not exist in the object output, then create them.
// Initialize the value to be 0.
// Else, if it does exist, then increment the count by 1.
//
// Intended object output:
// var output = {
//   '2014-07-14': {
//     'hired': 102,
//     'onboarding_completed': 191
//   },
//   '2014-08-04': {
//     'hired': 343
//   }
// }
//
// Then, with the output object, can generate a csv of:
// count,week,workflow_state
// 102,2014-07-14,hired
// 191,2014-07-14,onboarding_completed
// 343,2014-08-04,hired
//
