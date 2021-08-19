function validateBox(board, startRow, endRow, startCol, endCol) {
  const hash = {};
  for (let i = startRow; i < endRow; i++) {
    for (let j = startCol; j < endCol; j++) {
      const cell = board[i][j];
      if (cell !== ".") {
        if (cell in hash) {
          return false;
        }
        hash[cell] = true;
      }
    }
  }
  return true;
}

function isValidSudoku(board) {
  const ROWS = board.length;
  const COLS = board[0].length;

  // validate all rows
  for (let i = 0; i < ROWS; i++) {
    if (!validateBox(board, i, i + 1, 0, COLS)) return false;
  }
  // validate all columns
  for (let i = 0; i < COLS; i++) {
    if (!validateBox(board, 0, ROWS, i, i + 1)) return false;
  }
  // validate all (inner) smaller boxes
  const SIZE = Math.sqrt(board.length);
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      if (
        !validateBox(board, i * SIZE, (i + 1) * SIZE, j * SIZE, (j + 1) * SIZE)
      )
        return false;
    }
  }
  return true;
}
const board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku(board));
