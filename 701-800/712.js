var minimumDeleteSum = function (s1, s2) {
  let m = s1.length,
    n = s2.length;
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] + s1[i - 1].codePointAt();
  }
  for (let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j - 1] + s2[j - 1].codePointAt();
  }

  for (let i = 1; i <= m; i++) {
    let c1 = s1[i - 1];
    for (let j = 1; j <= n; j++) {
      let c2 = s2[j - 1];
      if (c1 === c2) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + s1[i - 1].codePointAt(),
          dp[i][j - 1] + s2[j - 1].codePointAt()
        );
      }
    }
  }
  return dp[m][n];
};
