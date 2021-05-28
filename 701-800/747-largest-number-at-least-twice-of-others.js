var dominantIndex = function (nums) {
  let max1, max2, index;
  max1 = Math.max(...nums);
  index = nums.indexOf(max1);
  nums.splice(index, 1);
  max2 = Math.max(...nums);
  return max1 >= 2 * max2 ? index : -1;
};

var dominantIndex = function (nums) {
  let f = 0,
    s = 0;
  for (let n of nums) {
    if (n > f) {
      s = f;
      f = n;
    } else if (n > s) {
      s = n;
    }
  }
  return f >= 2 * s ? nums.indexOf(f) : -1;
};

let res = dominantIndex([0, 0, 1, 2]);

console.log(res);
