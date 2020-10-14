var maxProfit = function (prices) {
  let len = prices.length;
  if (len < 2) return 0;
  let dp = [0, -prices[0]];
  for (let i = 1; i < len; i++) {
    dp[0] = Math.max(dp[0], dp[1] + prices[i]);
    dp[1] = Math.max(dp[1], -prices[i]);
  }
  return dp[0];
};
