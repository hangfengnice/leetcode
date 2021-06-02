var checkSubarraySum = function (nums, k) {
  const m = nums.length;
  if (m < 2) {
    return false;
  }
  const map = new Map();
  map.set(0, -1);
  let remainder = 0;
  for (let i = 0; i < m; i++) {
    remainder = (remainder + nums[i]) % k;
    if (map.has(remainder)) {
      const prevIndex = map.get(remainder);
      if (i - prevIndex >= 2) {
        return true;
      }
    } else {
      map.set(remainder, i);
    }
  }
  return false;
};

let res = checkSubarraySum([23, 2, 4, 6, 7], 6);

console.log(res, "res");
