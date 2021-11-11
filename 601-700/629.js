var kInversePairs = function (n, k) {
  let dp = new Array(k + 1).fill(0);
  dp[0] = 1;
  for (let i = 2; i <= n; i++) {
    let next = new Array(k + 1).fill(0);
    next[0] = 1;

    for (let j = 1; j <= k; j++) {
      next[j] = (next[j - 1] + dp[j]) % mod;
      if (j >= i) {
        next[j] = (next[j] - dp[j - i] + mod) % mod;
      }
    }
    dp = next;
  }
  return dp[k];
};
