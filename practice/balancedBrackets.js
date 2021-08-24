function balancedBrackets(string) {
  const hash = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];
  for (let bracket of string) {
    // is the bracket right one?
    if (bracket in hash) {
      if (stack.length === 0) return false;
      const lastLeftBracket = stack.pop();
      if (hash[bracket] !== lastLeftBracket) return false;
    }
    // left bracket
    else {
      if (!Object.values(hash).includes(bracket)) return false;
      stack.push(bracket);
    }
  }
  return stack.length === 0 ? true : false;
}
let s = "((({})))";
console.log(balancedBrackets(s));
