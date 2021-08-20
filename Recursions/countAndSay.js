// https://leetcode.com/problems/count-and-say/

function evaluate(str) {
  const hash = {};
  const arr = [];
  let result = [];
  let currentChar = str[0];
  for (let char of str) {
    if (char !== currentChar) {
      result += `${hash[currentChar]}${currentChar}`;
      currentChar = char;
      delete hash[currentChar];
      hash[char] = 1;
    } else {
      if (char in hash) {
        hash[char] += 1;
      } else {
        hash[char] = 1;
      }
    }
  }
  result += `${Object.values(hash)[0]}${Object.keys(hash)[0]}`;
  return result;
}

function countAndSay(n) {
  // base case
  if (n === 1) return "1";
  if (n === 2) return "11";
  if (n === 3) return "21";
  // 1211
  // 111221

  const previousSay = countAndSay(n - 1);
  return evaluate(previousSay);
}

// console.log(countAndSay(5));
console.log(evaluate("1211"));
