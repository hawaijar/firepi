// https://leetcode.com/problems/generate-parentheses/

function generateParenthesis(n) {
  const result = [];
  const recur = (prefix, left = 0, right = 0) => {
    if (prefix.length === 2 * n) {
      result.push(prefix);
    } else {
      if (left < n) {
        recur(prefix + "(", left + 1, right);
      }
      if (right < left) {
        recur(prefix + ")", left, right + 1);
      }
    }
  };
  recur("", 0, 0);
  return result;
}

console.log(generateParenthesis(3));
