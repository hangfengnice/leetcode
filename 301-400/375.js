var getMoneyAmount = function (n) {
  const f = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (let i = n - 1; i >= 1; i--) {
    for (let j = i + 1; j <= n; j++) {
      let minCost = Infinity;
      for (let k = i; k < j; j++) {
        let cost = k + Math.max(f[i][k - 1], f[k + 1][j]);
        minCost = Math.min(minCost, cost);
      }
      f[i][j] = minCost;
    }
  }
  return f[1][n];
};
