// https://leetcode.com/problems/longest-palindromic-substring/

function getPalindrome(s, i, j) {
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    i -= 1;
    j += 1;
  }
  return s.slice(i + 1, j);
}

function longestPalindrome(s) {
  // base case
  if (s.length <= 1) return s;
  let result = "";
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    let odd = getPalindrome(s, i, i);
    if (odd.length > longest) {
      longest = odd.length;
      result = odd;
    }
    let even = getPalindrome(s, i, i + 1);
    if (even.length > longest) {
      longest = even.length;
      result = even;
    }
  }
  return result;
}

const s = "good";
console.log(longestPalindrome(s));
