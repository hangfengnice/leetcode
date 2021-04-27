var maxProfit = function (prices) {
  let len = prices.length;
  if (len < 2) return 0;
  let dp = Array.from(Array(len), () => []);
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  dp[0][2] = 0;
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][2] - prices[i]);
    dp[i][2] = dp[i - 1][0];
  }
  return Math.max(dp[len - 1][0], dp[len - 1][2]);
};

var maxProfit = function (prices) {
  let len = prices.length;
  if (len < 2) return 0;
  let dp = [[0, -prices[0], 0], []];

  for (let i = 1; i < len; i++) {
    dp[i & 1][0] = Math.max(dp[(i - 1) & 1][0], dp[(i - 1) & 1][1] + prices[i]);
    dp[i & 1][1] = Math.max(dp[(i - 1) & 1][1], dp[(i - 1) & 1][2] - prices[i]);
    dp[i & 1][2] = dp[(i - 1) & 1][0];
  }
  return Math.max(dp[(len - 1) & 1][0], dp[(len - 1) & 1][2]);
};

var maxProfit = function (prices) {
  let len = prices.length;
  if (len < 2) return 0;
  let dp = [0, -prices[0], 0];
  let preCash = 0;
  let preStock = dp[1];
  for (let i = 1; i < len; i++) {
    dp[0] = Math.max(preCash, preStock + prices[i]);
    dp[1] = Math.max(preStock, dp[2] - prices[i]);
    dp[2] = preCash;

    preCash = dp[0];
    preStock = dp[1];
  }
  return Math.max(dp[0], dp[2]);
};

// 2种状态
var maxProfit = function (prices) {
  let n = prices.length;
  if (n < 2) return 0;
  let dp = Array.from(Array(n), () => []);
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      dp[0][0] = 0;
      dp[0][1] = -prices[0];
      continue;
    } else if (i == 1) {
      dp[1][0] = Math.max(dp[0][0], dp[0][1] + prices[1]);
      dp[1][1] = Math.max(dp[0][1], -prices[1]);
      continue;
    }
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
  }
  return dp[n - 1][0];
};

var maxProfit = function (prices) {
  let n = prices.length;
  if (n < 2) return 0;
  let dp_i_0 = 0;
  let dp_i_1 = -Infinity;
  let dp_pre = 0;
  for (let i = 0; i < n; i++) {
    let tmp = dp_i_0;
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, dp_pre - prices[i]);
    dp_pre = tmp;
  }
  return dp_i_0;
};
