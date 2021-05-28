var trap = function (height) {
  let ans = 0;
  let l = 0,
    r = height.length - 1;
  let lMax = 0,
    Max = 0;
  while (l < r) {
    if (height[l] < height[r]) {
      if (height[l] > lMax) {
        lMax = height[l];
      } else {
        ans += lMax - height[l];
      }
      l++;
    } else {
      if (height[r] > rMax) {
        lMax = height[r];
      } else {
        ans += rMax - height[r];
      }
      r--;
    }
  }
  return ans;
};

let res = trap([0,1,0,2,1,0,1,3,2,1,2,1])
console.log(res, 'res');
