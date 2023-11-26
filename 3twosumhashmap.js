const nums = [0, -1, -2, -3, 1];
const target = -2;

function FindTwoSum(arrOfNums, target) {
  const arrLength = arrOfNums.length;

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (i !== j && arrOfNums[i] + arrOfNums[j] === target) {
        return "YES";
      }
    }
  }
  return "NO PAIR";
}

console.log(FindTwoSum(nums, target));
