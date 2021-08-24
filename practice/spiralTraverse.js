function spiralTraverse(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  let [startRow, startCol] = [0, 0];
  let [endRow, endCol] = [m - 1, n - 1];
  const result = [];
  while (startRow <= endRow && startCol <= endCol) {
    // print the top row
    for (let i = startCol; i <= endCol; i++) {
      result.push(matrix[startRow][i]);
    }
    // print the right column
    for (let i = startRow + 1; i <= endRow; i++) {
      result.push(matrix[i][endCol]);
    }
    // print the bottom row
    for (let i = endCol - 1; i >= startCol; i--) {
      if (startRow === endRow) break;
      result.push(matrix[endRow][i]);
    }
    // print the left row
    for (let i = endRow - 1; i > startRow; i--) {
      if (startCol === endCol) break;
      result.push(matrix[i][startCol]);
    }

    startCol += 1;
    startRow += 1;
    endRow -= 1;
    endCol -= 1;
  }
  return result;
}

const a = [
  [1, 2, 3, 4],
  [10, 11, 12, 5],
  [9, 8, 7, 6],
];
console.log(spiralTraverse(a));
