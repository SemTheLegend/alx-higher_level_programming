#!/usr/bin/node
const cmdArgs = process.argv;
const arg1 = parseInt(cmdArgs[2]);
let x = 0;

if (cmdArgs.length <= 2) {
  console.log('Missing number of occurences');
} else {
  while (x < arg1) {
    console.log('C is fun');
    x++;
  }
}
