var longestArithSeqLength = function (nums) {
  let n = nums.length;
  let dp = new Array(n).fill(0).map(() => new Array(n).fill(2));

  let max = 2;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = 0; k < i; k++) {
        if (nums[j] - nums[i] === nums[i] - nums[k]) {
          dp[i][j] = Math.max(dp[i][j], dp[k][i] + 1);
          max = Math.max(max, dp[i][j]);
        }
      }
    }
  }
  return max;
};
