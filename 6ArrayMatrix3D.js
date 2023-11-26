//Array Matrix (3D)

function array3D(X, Y, Z) {
  let matrix3D = [];
  for (let i = 0; i < X; i++) {
    matrix3D[i] = [];
    for (let j = 0; j < Y; j++) {
      matrix3D[i][j] = [];
      for (let k = 0; k < Z; k++) {
        matrix3D[i][j][k] = 3;
      }
    }
  }
  return matrix3D;
}

const my3DArray = array3D(3, 3, 3);

const A = my3DArray[2][1][1];

console.log(A);
