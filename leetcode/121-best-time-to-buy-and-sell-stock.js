// 暴力
var maxProfit = function (prices) {
  let max = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      if (profit > max) {
        max = profit;
      }
    }
  }
  return max;
};

// 优化
var maxProfit = function (prices) {
  let minprice = Infinity;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minprice) minprice = prices[i];
    else if (prices[i] - minprice > max) {
      max = prices[i] - minprice;
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
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
  }
  return dp[len - 1][0];
};

// 动态规划 3种状态
var maxProfit = function (prices) {
  let len = prices.length;
  if (len < 2) return 0;
  let dp = Array.from(Array(len), () => []);
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  dp[0][2] = 0;
  for (let i = 1; i < len; i++) {
    dp[i][0] = 0;
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]);
  }
  return Math.max(dp[len - 1][0], dp[len - 1][2]);
};

var maxProfit = function (prices) {
  let len = prices.length;
  if (len < 2) return 0;
  let dp = [[0, -prices[0]], []];
  for (let i = 1; i < len; i++) {
    dp[i & 1][0] = Math.max(dp[(i - 1) & 1][0], dp[(i - 1) & 1][1] + prices[i]);
    dp[i & 1][1] = Math.max(dp[(i - 1) & 1][1], -prices[i]);
  }
  return dp[(len - 1) & 1][0];
};

// 再优化
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

// 方法4 差分数组
var maxProfit = function (prices) {
  let len = prices.length;
  if (len < 2) return 0;
  let diff = [];
  for (let i = 0; i < len - 1; i++) {
    diff[i] = prices[i + 1] - prices[i];
  }
  let dp = [];
  dp[0] = diff[0];
  for (let i = 1; i < len - 1; i++) {
    dp[i] = Math.max(diff[i], dp[i - 1] + diff[i]);
  }
  let res = 0;
  for (let i = 0; i < len - 1; i++) {
    res = Math.max(res, dp[i]);
  }
  return res;
};

// 方法4 差分数组 空间优化
var maxProfit = function (prices) {
  let len = prices.length;
  if (len < 2) return 0;
  let pre = prices[1] - prices[0];
  let res = Math.max(0, pre);

  let diff, cur;

  for (let i = 1; i < len - 1; i++) {
    diff = prices[i + 1] - prices[i];
    cur = Math.max(diff, diff + pre);
    res = Math.max(res, cur);
    pre = cur;
  }
  return res;
};

let res = maxProfit([7, 1, 5, 3, 6, 4]);

console.log(res);
