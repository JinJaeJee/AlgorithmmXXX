process.stdin.resume();
process.stdin.setEncoding("utf8");
var util = require("util");
var input = "";

process.stdin.on("data", function (text) {
  input += text;
});

process.stdin.on("end", function () {
  let numbers = input.split(" ").map(Number);
  let a1 = numbers[0];
  let a2 = numbers[1];
  let n = numbers[2];

  if (n >= 10) {
    console.error("Error: n should be less than 10");
    return;
  }

  let sequence = [a1, a2];
  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 2] + sequence[i - 1];
  }

  console.log(sequence[n - 1]);
});
