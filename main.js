var minCost = function (costs) {
  const n = costs.length
  let dp = []
  for(let i = 0; i < 3; i ++) {
    dp[i] = costs[0][i]
  }

  for(let i = 1; i < n; i ++) {
    const dpNew = new Array(3).fill(0)

    for(let j = 0; j < 3; j ++) {
      dpNew[j] = Math.min(dp[(j + 1) % 3], dp[(j + 2) % 3]) + costs[i][j]
      dp = dpNew
    }
  }

  return dp.reduce((a, b) => a > b ? b : a)
}
