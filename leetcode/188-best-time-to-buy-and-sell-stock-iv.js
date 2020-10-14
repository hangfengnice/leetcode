var maxProfit = function (prices) {
  let len = prices.length;
  if (k == 0 || len < 2) {
    return 0;
  }
  if (k >= len / 2) return greedy(len);

  let dp = Array.from(Array(len), () => []);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < k; j++) {
      dp[i][j] = [0, Number.MIN_SAFE_INTEGER];
    }
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < k; j++) {
      if (i == 0) {
        dp[i][j][1] = -prices[0];
        dp[i][j][0] = 0;
      } else {
        if (j == 0) {
          dp[i][j][1] = Math.max(dp[i - 1][j][1], -prices[i]);
        } else {
          dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j][0] - prices[i]);
        }
        dp[i][j][0] = Math.max(
          dp[i - 1][j][0],
          dp[i - 1][j - 1][1] + prices[i]
        );
      }
    }
  }
  return dp[len - 1][k - 1][0];

  function greedy(len) {
    let res = 0;
    for (let i = 0; i < len; i++) {
      if (prices[i - 1] < prices[i]) {
        res += prices[i] - prices[i - 1];
      }
    }
    return res;
  }
};

// 优化
var maxProfit = function (k, prices) {
  let len = prices.length;
  if (k == 0 || len < 2) {
    return 0;
  }
  if (k >= len / 2) return greedy(len);

  let dp = Array.from(Array(k), () => [0]);
  for (let j = 0; j < k; j++) {
    dp[j][1] = Number.MIN_SAFE_INTEGER;
  }
  for (let price of prices) {
    for (let j = 0; j < k; j++) {
      if (j == 0) {
        dp[j][1] = Math.max(dp[j][1], -price);
      } else {
        dp[j][1] = Math.max(dp[j][1], dp[j - 1][0] - price);
      }
      dp[j][0] = Math.max(dp[j][0], dp[j][1] + price);
    }
  }
  return dp[k - 1][0];

  function greedy(len) {
    let res = 0;
    for (let i = 0; i < len; i++) {
      if (prices[i - 1] < prices[i]) {
        res += prices[i] - prices[i - 1];
      }
    }
    return res;
  }
};

let result = maxProfit(2, [3, 3, 5, 0, 0, 3, 1, 4]);
console.log(result);
