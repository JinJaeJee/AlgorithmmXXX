function pasceltriangle(numrow) {
  let arr = [];

  for (let i = 0; i < numrow; i++) {
    if (arr.length === 0) {
      arr.push([1]);
    } else if (arr.length === 1) {
      arr.push([1, 1]);
    } else {
      let newRow = [1];
      for (let j = 1; j < arr[i - 1].length; j++) {
        newRow.push(arr[i - 1][j - 1] + arr[i - 1][j]);
      }
      newRow.push(1);
      arr.push(newRow);
    }
  }
  return arr;
}

console.log(pasceltriangle(7));
