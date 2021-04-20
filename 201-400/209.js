var minSubArrayLen = function (target, nums) {
  let n = nums.length;
  if (n == 0) return 0;

  let ans = Number.MAX_SAFE_INTEGER;

  let sums = new Array(n + 1).fill(0)

  for(let i = 1; i <= n; i ++) {
    sums[i] = sums[i - 1] + nums[i - 1]
  }

  for(let i = 1; i <= n; i ++) {

  }
};
