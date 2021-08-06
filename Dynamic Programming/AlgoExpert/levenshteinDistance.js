// Given two strings - A and B, find the minimum edits needed to convert from A and B
// given that only three possible operations are allowed - insert, delete and update.

function levenshteinDistance(str1, str2) {
  // base case
  if (str1 === str2) return 0;

  const m = str1.length;
  const n = str2.length;

  const table = new Array(m + 1).fill([]);
  for (let i = 0; i <= m; i++) {
    table[i] = new Array(n + 1).fill(0);
  }
  table[0][0] = 0;
  for (let i = 1; i <= m; i++) {
    table[i][0] = i;
  }
  for (let j = 1; j <= n; j++) {
    table[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        table[i][j] = table[i - 1][j - 1];
      } else {
        table[i][j] =
          1 +
          Math.min(
            Math.min(table[i - 1][j - 1], table[i - 1][j]),
            table[i][j - 1]
          );
      }
    }
  }

  return table[m][n];
}
const str1 = "abc";
const str2 = "xyc";
console.log(levenshteinDistance(str1, str2));
