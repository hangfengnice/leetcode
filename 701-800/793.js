var preimageSizeFZF = function (k) {
  let l = k,
    h = 10 * k + 1;



  while (l < h) {
    let mid = (l + h) >> 1;
    let zmin = trailingZeroes(mid);
    if (zmin === k) {
      return 5;
    } else if (zmin < k) l = mid + 1;
    else {
      h = mid;
    }
  }
  return 0;

  function trailingZeroes(x) {
    let count = 0;
    while (x > 1) {
      x = parseInt(x / 5);
      count += x;
    }
    return count;
  }
};

let res = preimageSizeFZF(6)

console.log(res, 'res');
