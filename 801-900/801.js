var minSwap = function (A, B) {
  let n = A.length;
  let dp = new Array(n).fill(0).map(() => []);
  dp[0][0] = 0;
  dp[0][1] = 1;

  for (let i = 1; i < n; i++) {
    if (A[i - 1] < A[i] && B[i - 1] < B[i]) {
      if (A[i - 1] < B[i] && B[i - 1] < A[i]) {
        dp[i][0] = Math.min(dp[i - 1][0], dp[i - 1][1]);
        dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][1]) + 1;
      } else {
        dp[i][0] = dp[i - 1][0];
        dp[i][1] = dp[i - 1][1] + 1;
      }
    } else {
      dp[i][0] = dp[i - 1][1];
      dp[i][1] = dp[i - 1][0] + 1;
    }
  }
  return Math.min(dp[n - 1][0], dp[n - 1][1]);
};
