var minSteps = function (n) {
  let ans = 0,
    d = 2;
  while (n > 1) {
    while (n % d == 0) {
      ans += d;
      n /= d;
    }
    d++;
  }

  return ans;
};

var minSteps = function (n) {
  let dp = new Array(n + 1).fill(0);

  let h = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= n; i++) {
    dp[i] = i;
    for (let j = 2; j <= h; j++) {
      if (i % j == 0) {
        dp[i] = dp[j] + dp[i / j];
      }
    }
  }
  return dp[n];
};
