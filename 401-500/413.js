var numberOfArithmeticSlices = function (nums) {
  const n = nums.length;
  if (n === 1) return 0;
  let d = nums[0] - nums[1],
    t = 0;

  let ans = 0;
  for (let i = 2; i < n; i++) {
    if (nums[i - 1] - nums[i] === d) {
      t++;
    } else {
      d = nums[i - 1] = nums[i];
      t = 0;
    }
    ans += t;
  }
  return ans;
};
