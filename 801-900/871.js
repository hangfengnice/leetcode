var minRefuelStops = function (target, startFuel, stations) {
  let n = stations.length;
  let dp = new Array(n + 1).fill(0);
  dp[0] = startFuel;

  for (let i = 0; i < n; i++) {
    for (let t = i; t >= 0; t--) {
      if (dp[t] >= stations[i][0]) {
        dp[t + 1] = Math.max(dp[t + 1], dp[t] + stations[i][1]);
      }
    }
  }
  for (let i = 0; i <= n; i++) {
    if (dp[i] >= target) return i;
  }
  return -1;
};
