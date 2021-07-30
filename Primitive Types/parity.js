//4.1 Computing the parity of a word
function parity(x) {
  let result = 0;
  while (x) {
    result = result ^ (x & 1);
    x = x >> 1;
  }
  return result;
}

console.log(parity(32));
