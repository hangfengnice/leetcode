var findTargetSumWays = function (nums, target) {
  let count = 0;
  backtrack(nums, target, 0, 0);

  return count;

  function backtrack(nums, target, index, sum) {
    if (index === nums.length) {
      if (target === sum) {
        count++;
      }
    } else {
      backtrack(nums, target, index + 1, sum + nums[index]);
      backtrack(nums, target, index + 1, sum - nums[index]);
    }
  }
};

var findTargetSumWays = function (nums, target) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }

  const diff = sum - target;
  if (diff < 0 || diff % 2 !== 0) {
    return 0;
  }

  const n = nums.length,
    neg = diff / 2;

  const dp = new Array(n + 1).fill(0).map(() => new Array(neg + 1).fill(0));
  dp[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    let num = nums[i - 1];

    for (let j = 0; j <= neg; j++) {
      dp[i][j] = dp[i - 1][j];

      if (j >= num) {
        dp[i][j] += dp[i - 1][j - num];
      }
    }
  }
  return dp[n][neg];
};
