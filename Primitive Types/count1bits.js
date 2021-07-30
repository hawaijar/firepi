function count_1_bits(x) {
  let count = 0;
  while (x) {
    count += x & 1;
    x = x >> 1;
  }
  return count;
}

console.log(count_1_bits(10));
