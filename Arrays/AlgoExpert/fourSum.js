function fourNumberSum(a, targetSum) {
  const result = [];
  const sum = (arr) => arr.reduce((a, b) => a + b, 0);

  function backtrack(prefix, array, target) {
    if (prefix.length === 4 && sum(prefix) === targetSum) {
      result.push(prefix.slice());
    } else if (prefix.length < 4) {
      for (let i = 0; i < array.length; i++) {
        prefix.push(array[i]);
        backtrack(prefix, array.slice(i + 1), target - array[i]);
        prefix.pop();
      }
    }
  }

  backtrack([], a, targetSum);
  return result;
}

// const a = [7, 6, 4, -1, 1, 2];
// const t = 16;
const a = [1, 0, -1, 0, -2, 2];
const t = 0;

console.log(fourNumberSum(a, t));
