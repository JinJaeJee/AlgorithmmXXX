const arr = [-4, 3, -9, 0, 4, 1];

function PlusminusZero(arr) {
  let Minus = 0;
  let Zero = 0;
  let Plus = 0;

  arr.forEach((number) => {
    if (number === 0) {
      Zero++;
    } else if (number > 0) {
      Plus++;
    } else {
      Minus++;
    }
  });

  const total = arr.length;
  const ratioPlus = Plus / total;
  const ratioMinus = Minus / total;
  const ratioZero = Zero / total;

  console.log(ratioPlus.toFixed(6));
  console.log(ratioMinus.toFixed(6));
  console.log(ratioZero.toFixed(6));
}

PlusminusZero(arr);
