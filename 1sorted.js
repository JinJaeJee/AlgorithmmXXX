// const input = [64, 25, 12, 22, 11];

// console.log(
//   input.sort(function (a, b) {
//     return a - b;
//   })
// );

const input = [64, 25, 12, 22, 11];

function Sort(input) {
  const Linput = input.length;

  for (let i = 0; i < Linput - 1; i++) {
    for (let j = 0; j < Linput - i - 1; j++) {
      if (input[j] < input[j + 1]) {
        [input[j], input[j + 1]] = [input[j], input[j + 1]];
      } else {
        [input[j], input[j + 1]] = [input[j + 1], input[j]];
      }
    }
  }
}

Sort(input);
