var arrangeCoins = function(n) {
  if (n < 3) return 1

  let l = 1, r = n, doubleN = 2 * n, mid, now
  while(l <= r ) {
    mid = ((r - l) >> 1) + l
    now = mid * mid + mid
    if (now > doubleN) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return r
};

let res = arrangeCoins(4)
console.log(res, 'res');
