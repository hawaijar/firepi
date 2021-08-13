// Given a 2D/ matrix, print the zig/zag traversal of it
// Refer how to print 2D/matrix diagonally here - https://www.youtube.com/watch?v=T8ErAYobcbc
function diagonals(array) {
  const ROW = array.length;
  const COL = array[0].length;

  let result = [];
  let rightToLeft = true;
  let temp = [];

  // printing first half of the diagonal
  for (let k = 0; k < ROW; k++) {
    let [i, j] = [k, 0];
    temp = [];
    while (i >= 0 && j < COL) {
      temp.push(array[i][j]);
      i -= 1;
      j += 1;
    }
    if (rightToLeft) {
      temp = temp.reverse();
    }
    rightToLeft = !rightToLeft;
    result = [...result, ...temp];
  }
  // printing second half of the diagonal
  for (let k = 1; k < COL; k++) {
    temp = [];
    let [i, j] = [ROW - 1, k];
    while (j < COL && i >= 0) {
      temp.push(array[i][j]);
      i -= 1;
      j += 1;
    }
    if (rightToLeft) {
      temp = temp.reverse();
    }
    rightToLeft = !rightToLeft;
    result = [...result, ...temp];
  }
  return result;
}

const a = [
  [1, 3, 4, 10],
  [2, 5, 9, 11],
  [6, 8, 12, 15],
  [7, 13, 14, 16],
];

console.log(diagonals(a));
