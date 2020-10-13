// jian-sheng-zi-lcof
var cuttingRope = function (n) {
  let dp = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    let cur = 0;
    for (let j = 1; j <= i - j; j++) {
      cur = Math.max(cur, j * (i - j), j * dp[i - j]);
    }
    dp[i] = cur;
  }
  return dp[n];
};
