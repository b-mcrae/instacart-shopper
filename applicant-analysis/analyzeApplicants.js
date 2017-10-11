var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter the start date : ', (answer1) => {
    rl.question('Please enter the end date : ', (answer2) => {
        var result = answer1 + ' ' + answer2;
        console.log(`${result}`);
        rl.close();
    });
});
