var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;

  let dp = [];
  dp[0] = 1;
  let maxans = 1;
  for (let i = 1; i < nums.length; i++) {
    d[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        maxans = Math.max(dp[i], maxans);
      }
    }
  }
  return maxans;
};
