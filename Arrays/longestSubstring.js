// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Reference: https://www.youtube.com/watch?v=EoMlfgfUPa0
// Use sliding window

function lengthOfLongestSubstring(s) {
  // base case
  if (s.length <= 1) return s.length;

  let result = [];
  let hash = {};

  let [i, j] = [0, 0];
  while (j < s.length) {
    const char = s[j];
    if (char in hash && hash[char] >= i) {
      const temp = s.slice(i, j);
      if (temp.length > result.length) {
        result = temp;
      }
      // update i position
      i = hash[char] + 1;
      delete hash[char];
      hash[char] = j;
    } else {
      hash[char] = j;
    }
    j += 1;
  }
  const final = s.slice(i, j);
  if (final.length > result.length) {
    result = final;
  }
  // return result;
  return result.length;
}

let s = "abba";
console.log(lengthOfLongestSubstring(s));
