var minIncrements = function (n, cost) {
  let ans = 0

  for (let i = n - 2; i > 0; i -= 2) {
    ans += Math.abs(cost[i] - cost[i + 1])
    cost[i >> 1] += Math.max(cost[i], cost[i + 1])
  }
  return ans
}
