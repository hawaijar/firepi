// Longest common sub/sequence
function longestCommonSubsequence(str1, str2) {
  // base case
  if (str1 === str2) return str1.length;
  if (str1 === "" || str2 === "") return 0;

  let m = str1.length;
  let n = str2.length;

  let table = new Array(m + 1).fill([]);
  for (let i = 0; i <= m; i++) {
    table[i] = new Array(n + 1).fill(0);
  }
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        table[i][j] = 0;
      } else {
        if (str1[i - 1] === str2[j - 1]) {
          table[i][j] = 1 + table[i - 1][j - 1];
        } else {
          table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
        }
      }
    }
  }
  console.log(table);
  findSequence(str1, str2, m, n, table);
  return table[m][n];
}
function findSequence(str1, str2, m, n, table) {
  let [i, j] = [m, n];
  const result = [];
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      result.push(str1[i - 1]);
      i--;
      j--;
    } else {
      if (table[i - 1][j] > table[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
  }
  console.log(result.reverse());
}

let s1 = "abcd";
let s2 = "amd";

console.log(longestCommonSubsequence(s1, s2));
