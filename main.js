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

let res = hammingDistance(1, 4);

console.log(res, "res");
