var hammingDistance = function (x, y) {
  let now = x ^ y;

  let count = 0;
  while (now) {
    if (now & 1) {
      count++;
    }
    now = now >> 1;
  }
  return count;
};
