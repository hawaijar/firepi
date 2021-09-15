function nonAttackingQueens(n) {
  // base case(s)
  if (n <= 1) return n;
  const board = new Array(n).fill([]);
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill(0);
  }
  const LEFT_DIAGONALS = new Set();
  const RIGHT_DIAGONALS = new Set();
  const VERTICALS = new Set();

  const canQueenBePlacedAt = (row, col) => {
    return (
      !LEFT_DIAGONALS.has(row - col) &&
      !RIGHT_DIAGONALS.has(row + col) &&
      !VERTICALS.has(col)
    );
  };
  const placeQueenAt = (row, col) => {
    LEFT_DIAGONALS.add(row - col);
    RIGHT_DIAGONALS.add(row + col);
    VERTICALS.add(col);
    board[row][col] = 1;
  };
  const removeQueenFrom = (row, col) => {
    LEFT_DIAGONALS.delete(row - col);
    RIGHT_DIAGONALS.delete(row + col);
    VERTICALS.delete(col);
    board[row][col] = 0;
  };
  let count = 0;
  function findQueenPositionAt(row = 0) {
    if (row === n) {
      count += 1;
    } else {
      for (let col = 0; col < n; col++) {
        if (canQueenBePlacedAt(row, col)) {
          placeQueenAt(row, col);
          findQueenPositionAt(row + 1);
          removeQueenFrom(row, col);
        }
      }
    }
  }
  findQueenPositionAt(0);
  return count;
}
console.log(nonAttackingQueens(4));
