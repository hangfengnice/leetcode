var mySqrt = function (x) {
  let l = 0,
    r = x,
    val,
    mid;
  while (l <= r) {
    mid = ((r - l) >> 1) + l;
    val = mid * mid;
    if (val == x) {
      return mid;
    } else if (val > x) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return r;
};

let res = mySqrt(8);

console.log(res);
