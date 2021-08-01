// 4.2 Swap Bits

/**
 * @description - swapping the bits at position 'm' and 'n'
 * @param x - the number
 * @param m
 * @param n
 * @return y - the updated number
 */
function swapBits(x, m, n) {
  // check if the bits are same
  if (x >> m === x >> n) return x;
  // Two points: x ^ 0 == x and x ^ 1 will reverse all the bits in x
  let a = 1 << (m - 1);
  let b = 1 << (n - 1);
  let c = a | b; // bitmask
  return x ^ c;
  // we need to reverse the bits only from 1 to 0 and vice versa and that can be done
  // by XORing the bits with 1.
}

console.log(swapBits(73, 7, 2));
