var minCostClimbingStairs = function (cost) {
  let n = cost.length;
  if (n < 2) return 0;
  if (n === 2) return Math.min(...cost);
  for (let i = 2; i < n; i++) {
    dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i];
  }
  return Math.min(dp[n - 1], dp[n - 2]);
};
