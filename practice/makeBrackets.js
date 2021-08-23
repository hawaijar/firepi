function createBrackets(n) {
  const result = [];
  const make = (prefix = "", left = 0, right = 0) => {
    if (prefix.length === 2 * n) {
      result.push(prefix);
    } else {
      if (left < n) {
        make(prefix + "(", left + 1, right);
      }
      if (right < left) {
        make(prefix + ")", left, right + 1);
      }
    }
  };
  make("", 0, 0);

  return result;
}

console.log(createBrackets(3));
