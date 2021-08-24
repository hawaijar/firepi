function longestBalancedBrackets(string) {
  // base case
  if (string.length === 0) return 0;

  let stack = [-1];
  let longest = 0;
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        longest = Math.max(longest, i - stack[stack.length - 1]);
      }
    }
  }
  return longest;
}
