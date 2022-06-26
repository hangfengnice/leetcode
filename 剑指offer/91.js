var minCost = function (costs) {
  let n = costs.length;

  let dp = [];
  for (let j = 0; j < 3; j++) {
    dp[j] = costs[0][j];
  }

  for (let i = 1; i < n; i++) {
    let newDep = [];
    for (let j = 0; j < 3; j++) {
      newDep[j] = Math.min(dp[(j + 1) % 3], dp[(j + 2) % 3]) + costs[i][j];
    }
    dp = newDep;
  }
  return dp.reduce((a, b) => (a > b ? b : a));
};
