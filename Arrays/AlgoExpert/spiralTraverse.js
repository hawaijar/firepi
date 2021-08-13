// Spiral traverse of an array (clock wise)
function spiralTraverse(matrix) {
  const ROW = matrix.length;
  const COL = matrix[0].length;
  const result = [];

  let [startRow, startCol] = [0, 0];
  let [endRow, endCol] = [ROW - 1, COL - 1];

  while (startRow <= endRow && startCol <= endCol) {
    // Print left to right
    for (let i = startCol; i <= endCol; i++) {
      result.push(matrix[startRow][i]);
    }
    startRow += 1;
    // Print top to bottom
    for (let i = startRow; i <= endRow; i++) {
      result.push(matrix[i][endCol]);
    }
    endCol -= 1;

    if (startRow <= endRow) {
      // Print right to left
      for (let i = endCol; i >= startCol; i--) {
        result.push(matrix[endRow][i]);
      }
      endRow -= 1;
    }

    if (startCol <= endCol) {
      // Print bottom to top
      for (let i = endRow; i >= startRow; i--) {
        result.push(matrix[i][startCol]);
      }
      startCol += 1;
    }
  }

  return result;
}

const array = [[1], [2], [3], [4]];

console.log(spiralTraverse(array));
