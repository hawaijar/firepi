function minimumCharactersForWords(words) {
  // base case
  if (words.length === 0) return [];
  let globalHash = {};

  for (let word of words) {
    let hash = {};
    for (let char of word) {
      if (char in hash) {
        hash[char] += 1;
      } else {
        hash[char] = 1;
      }
    }
    for (let key in hash) {
      if (key in globalHash) {
        if (hash[key] > globalHash[key]) {
          globalHash[key] = hash[key];
        }
      } else {
        globalHash[key] = hash[key];
      }
    }
  }
  let result = [];
  for (let key in globalHash) {
    result = [...result, ...new Array(globalHash[key]).fill(key)];
  }
  return result;
}

console.log(
  minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"])
);
