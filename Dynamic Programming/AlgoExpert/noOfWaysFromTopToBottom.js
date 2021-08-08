// Find the no.of ways to traverse from top/left to bottom/right
// given that you can travel only DOWN or RIGHT.
// E.g. For width = 2, height = 3 then output should be 3
function numberOfWaysToTraverseGraph(width, height) {
  function traverse(w, h, cache = {}) {
    if (w < 0 || w > width) {
      return 0;
    }
    if (h < 0 || h > height) {
      return 0;
    }
    if (w === 0 && h === 0) {
      return 1;
    }
    const hash = `${w}:${h}`;
    if (hash in cache) {
      return cache[hash];
    }
    cache[hash] = traverse(w, h - 1, cache) + traverse(w - 1, h, cache);
    return cache[hash];
  }

  return traverse(width - 1, height - 1);
}

console.log(numberOfWaysToTraverseGraph(2, 3));
