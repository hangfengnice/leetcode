var maxProfit = function (prices) {
  let len = prices.length;
  if (len < 2) return 0;
  let dp = Array.from(Array(len), () => []);

  dp[0][0] = -prices[0];
  dp[0][1] = 0;
  for (let i = 0; i < len; i++) {
    dp[i][2] = Number.MIN_SAFE_INTEGER;
  }
  dp[0][3] = 0;

  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);

    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] - prices[i]);
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] + prices[i]);
  }
  return Math.max(dp[len - 1][1], dp[len - 1][3]);
};

var maxProfit = function (prices) {
  let len = prices.length;
  if (len < 2) return 0;

  let dp = [-prices[0], 0, Number.MIN_SAFE_INTEGER, 0];
  for (let i = 1; i < len; i++) {
    dp[0] = Math.max(dp[0], -prices[i]);
    dp[1] = Math.max(dp[1], dp[0] + prices[i]);
    dp[2] = Math.max(dp[2], dp[1] - prices[i]);
    dp[3] = Math.max(dp[3], dp[2] + prices[i]);
  }
  return Math.max(dp[1], dp[3]);
};

// //
// var maxProfit = function (prices) {
//   let len = prices.length;
//   if (len < 2) return 0;
//   let left = [0],
//     minVal = prices[0];
//   for (let i = 1; i < len; i++) {
//     left[i] = Math.max(left[i - 1], prices[i] - minVal);
//     minVal = Math.min(minVal, prices[i]);
//   }

//   let right = [];
//   right[len - 1] = 0;
//   let maxVal = prices[len - 1];
//   for (let i = len - 1; i >= 0; i--) {
//     right[i] = Math.max(right[i + 1], maxVal - prices[i]);
//     maxVal = Math.min(maxVal, prices[i]);
//   }

//   console.log(left, right);

//   let res = Math.max(left[len - 1], right[0]);
//   for (let i = 1; i < len - 2; i++) {
//     res = Math.max(res, left[i] + right[i + 1]);
//   }
//   return res;
// };

// // 动态规划 另外一种操作
// var maxProfit = function (prices) {
//   let len = prices.length
//   if (len < 2) return 0
//   let k = 2
//   let dp = Array.from(Array(len), () => [])

//   for(let i = 0; i < len; i ++) {
//     for(let r = 0; r <= k; r ++) {

//     }
//   }
// }

// 状态机
var maxProfit = function (prices) {
  let len = prices.length;
  if (len < 2) return 0;
  let s1 = -prices[0],
    s2 = 0,
    s3 = Number.MIN_SAFE_INTEGER,
    s4 = 0;
  for (let i = 1; i < len; i++) {
    s1 = Math.max(s1, -prices[i]);
    s2 = Math.max(s2, s1 + prices[i]);
    s3 = Math.max(s3, s2 - prices[i]);
    s4 = Math.max(s4, s3 + prices[i]);
  }

  return Math.max(0, s4);
};

let result = maxProfit([3, 3, 5, 0, 0, 3, 1, 4]);

console.log(result);
