// 暴力 超时
var maxProfit = function (prices) {
  let len = prices.length;
  return calculate(0);
  function calculate(s) {
    if (s >= len) return 0;
    let max = 0;
    for (let i = s; i < len; i++) {
      let maxprofit = 0;
      for (let j = i + 1; j < len; j++) {
        if (prices[i] < prices[j]) {
          let profit = calculate(j + 1) + prices[j] - prices[i];
          if (profit > maxprofit) {
            maxprofit = profit;
          }
        }
      }
      if (maxprofit > max) {
        max = maxprofit;
      }
    }
    return max;
  }
};

// 峰谷
var maxProfit = function (prices) {
  let i = 0;
  let valley = prices[0];
  let peak = prices[1];
  let maxprofit = 0;
  let len = prices.length;
  while (i < len - 1) {
    while (i < len - 1 && prices[i] >= prices[i + 1]) i++;
    valley = prices[i];
    while (i < len - 1 && prices[i] <= prices[i + 1]) i++;
    peak = prices[i];
    maxprofit += peak - valley;
  }
  return maxprofit;
};

// 峰谷优化
var maxProfit = function (prices) {
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      max += prices[i] - prices[i - 1];
    }
  }
  return max;
};

// 动态规划
var maxProfit = function (prices) {
  let len = prices.length;
  if (len < 2) return 0;
  let dp = Array.from(Array(len), () => []);
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[len - 1][0];
};

var maxProfit = function (prices) {
  let len = prices.length;
  if (len < 2) return 0;
  let cash = 0;
  let hold = -prices[0];

  let preCash = cash;
  let preHold = hold;
  for (let i = 1; i < prices.length; i++) {
    cash = Math.max(preCash, preHold + prices[i]);
    hold = Math.max(preHold, preCash - prices[i]);
    preCash = cash;
    preHold = hold;
  }
  return preCash;
};

let result = maxProfit([7, 1, 5, 3, 6, 4]);

console.log(result);
