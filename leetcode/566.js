var matrixReshape = function (nums, r, c) {
  let row = nums.length;
  let cols = nums[0].length;
  if (row * cols != r * c) return nums;

  let ans = new Array(r).fill(0).map(() => new Array(c));

  let total = r * c;
  for (let i = 0; i < total; i++) {
    ans[Math.floor(i / c)][i % c] = nums[Math.floor(i / cols)][i % cols];
  }
  return ans;
};
