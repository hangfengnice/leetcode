var maxProduct = function (nums) {
  let len = nums.length;
  let dp = new Array(len).fill(0).map(() => [0, 0]);

  dp[0][0] = nums[0];
  dp[0][1] = nums[0];
  ans = nums[0];
  for (let i = 1; i < len; i++) {
    let cur = nums[i];
    dp[i][0] = Math.max(dp[i - 1][0] * cur, dp[i - 1][1] * cur, cur);
    dp[i][1] = Math.min(dp[i - 1][0] * cur, dp[i - 1][1] * cur, cur);
    ans = Math.max(ans, dp[i][0]);
  }
  return ans;
};
