var longestSubsequence = function (arr, difference) {
  let n = arr.length;
  let dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] - difference === arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

// 优化
var longestSubsequence = function (arr, difference) {
  let ans = 0;
  const dp = new Map();
  for (let v of arr) {
    dp.set(v, (dp.get(v - difference) || 0) + 1);
    ans = Math.max(ans, dp.get(v));
  }
  return ans;
};
