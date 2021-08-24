function longestSubstringWithoutDuplication(string) {
  // base case
  if (string.length <= 1) return string;
  let [i, j] = [0, 0];
  let hash = {};
  let longest = "";

  while (j < string.length) {
    const char = string[j];
    if (char in hash && hash[char] >= i) {
      const lastPos = hash[char];
      const newSubstring = string.slice(i, j);
      if (newSubstring.length > longest.length) {
        longest = newSubstring;
      }
      i = lastPos + 1;
      delete hash[char];
      hash[char] = j;
    } else {
      hash[char] = j;
    }
    j += 1;
  }
  if (string.slice(i, j).length > longest.length) {
    longest = string.slice(i, j);
  }
  return longest;
}
console.log(longestSubstringWithoutDuplication("clementisacap"));
