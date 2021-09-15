function generateDivTags(numberOfTags) {
  const result = [];
  const PAIR = "<div></div>";
  function generate(prefix, m, n) {
    if (prefix.length === numberOfTags * PAIR.length) {
      result.push(prefix);
    } else {
      if (m < numberOfTags) {
        generate(prefix + "<div>", m + 1, n);
      }
      if (n < m) {
        generate(prefix + "</div>", m, n + 1);
      }
    }
  }
  generate("", 0, 0);
  return result;
}

console.log(generateDivTags(3));
