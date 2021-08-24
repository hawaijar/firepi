function diagonals(array) {
  const m = array.length;
  const n = array[0].length;

  const d = [];

  for (let i = 0; i < m + n - 1; i++) {
    d[i] = [];
  }
  console.log(d);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = i + j;
      if (sum % 2 === 0) {
        d[sum].unshift(array[i][j]);
      } else {
        d[sum].push(array[i][j]);
      }
    }
  }
  return d;
}

function zigzagTraverse(array) {
  const d = diagonals(array);
  console.log(d);
  const result = [];
  for (let i = 0; i < d.length; i++) {
    for (let j = d[i].length - 1; j >= 0; j--) {
      result.push(d[i][j]);
    }
  }
  return result;
}

const a = [
  [1, 3, 4, 10],
  [2, 5, 9, 11],
  [6, 8, 12, 15],
  [7, 13, 14, 16],
];

console.log(zigzagTraverse(a));
