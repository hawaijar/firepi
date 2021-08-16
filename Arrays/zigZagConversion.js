// https://leetcode.com/problems/zigzag-conversion/

function convert(s, numRows) {
  // base case
  if (s.length === 0 || numRows === 1) return s;

  // create 'numRows' arrays
  const temp = [];
  for (let i = 0; i < numRows; i++) {
    temp[i] = [];
  }
  let goingDown = false;
  let currentRow = 0;
  for (let i = 0; i < s.length; i++) {
    temp[currentRow].push(s[i]);
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }
    currentRow = goingDown ? currentRow + 1 : currentRow - 1;
  }
  // merge all arrays (also removed any empty strings in it)
  return temp
    .reduce((acc, el) => {
      acc = [...acc, ...el];
      return acc;
    }, [])
    .join("");
}
const s = "AB";
const numRows = 1;
console.log(convert(s, numRows));
