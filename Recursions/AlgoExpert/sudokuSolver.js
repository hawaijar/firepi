function solveSudoku(board) {
  const SIZE = board.length;
  const ROWS = [];
  const COLS = [];
  const BOXES = [];
  for (let i = 0; i < SIZE; i++) {
    ROWS[i] = new Set();
    COLS[i] = new Set();
    BOXES[i] = new Set();
  }
  const BOX_SIZE = Math.floor(Math.sqrt(SIZE));

  // parse the input (board) and initialize the above arrays

  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      if (board[i][j] !== 0) {
        const num = board[i][j];
        ROWS[i].add(num);
        COLS[j].add(num);
        // boxId = i // 3 * 3 + j // 3
        const boxId = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        BOXES[boxId].add(num);
      }
    }
  }
  let isSolved = false;
  function backtrack(i, j) {
    // base case
    if (i === SIZE) {
      isSolved = true;
    } else {
      let new_i = i + Math.floor((j + 1) / SIZE);
      let new_j = (j + 1) % SIZE;
      if (board[i][j] !== 0) {
        backtrack(new_i, new_j);
      } else {
        for (let num of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
          const boxId = Math.floor(i / 3) * 3 + Math.floor(j / 3);
          if (
            !ROWS[i].has(num) &&
            !COLS[j].has(num) &&
            !BOXES[boxId].has(num)
          ) {
            ROWS[i].add(num);
            COLS[j].add(num);
            BOXES[boxId].add(num);
            board[i][j] = num;
            backtrack(new_i, new_j);
            if (isSolved) break;
            ROWS[i].delete(num);
            COLS[j].delete(num);
            BOXES[boxId].delete(num);
            board[i][j] = 0;
          }
        }
      }
    }
  }
  backtrack(0, 0);
}
const board = [
  [5, 3, 8, 0, 1, 0, 0, 0, 0],
  [0, 7, 9, 6, 0, 0, 0, 0, 0],
  [0, 0, 4, 0, 0, 2, 0, 0, 0],
  [0, 0, 7, 0, 2, 3, 4, 0, 0],
  [0, 0, 5, 0, 8, 0, 0, 0, 9],
  [4, 6, 0, 0, 9, 0, 0, 0, 1],
  [0, 9, 0, 2, 3, 4, 1, 5, 0],
  [0, 4, 1, 5, 0, 0, 2, 0, 0],
  [0, 0, 0, 8, 6, 1, 0, 3, 0],
];

solveSudoku(board);
console.log(board);
