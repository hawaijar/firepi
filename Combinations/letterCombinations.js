// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

const map = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

function letterCombinations(digits) {
  // base case
  if (digits.length === 0) return [];
  const result = [];
  const combine = (prefix, array) => {
    if (array.length === 0) {
      result.push(prefix.slice().join(""));
    } else {
      const keys = map[array[0]];
      for (let i = 0; i < keys.length; i++) {
        prefix = [...prefix, keys[i]];
        combine(prefix, array.slice(1));
        prefix.pop();
      }
    }
  };
  combine([], digits);
  return result;
}

console.log(letterCombinations("23"));
