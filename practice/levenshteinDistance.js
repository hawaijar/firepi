function levenshteinDistance(str1, str2) {
  // base case
  if (str1.length === 0) return str2.length;
  if (str2.length === 0) return str1.length;

  let matrix = new Array(str1.length + 1);
  for (let i = 0; i <= str1.length; i++) {
    matrix[i] = new Array(str2.length + 1).fill(0);
  }

  for (let i = 0; i <= str1.length; i++) {
    for (let j = 0; j <= str2.length; j++) {
      if (i === 0) {
        matrix[i][j] = j;
        continue;
      }
      if (j === 0) {
        matrix[i][j] = i;
        continue;
      }
      // compare the characters
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] =
          1 +
          Math.min(
            matrix[i - 1][j - 1],
            Math.min(matrix[i - 1][j], matrix[i][j - 1])
          );
      }
    }
  }
  return matrix[str1.length][str2.length];
}

const a = "abc";
const b = "yabd";

console.log(levenshteinDistance(a, b));
