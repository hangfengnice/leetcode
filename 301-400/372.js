var superPow = function (a, b) {
  let base = 1337;
  if (!b.length) return 1;
  let last = b.pop();

  let part1 = myPow(a, last);
  let part2 = myPow(superPow(a, b), 10);
  return (part1 * part2) % base;
  function myPow(a, k) {
    a %= base;

    let res = 1;
    for (let i = 0; i < k; i++) {
      res *= a;
      res %= base;
    }
    return res;
  }
};
