var uniquePathsWithObstacles = function (obstacleGrid) {
  let n = obstacleGrid.length,
    m = obstacleGrid[0].length;
  let dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = Array(m).fill(0);
  }

  dp[0][0] = !obstacleGrid[0][0] ? 1 : 0;
  if (!dp[0][0]) return 0;
  for (let i = 1; i < m; i++) {
    if (!obstacleGrid[0][i]) dp[0][i] = dp[0][i - 1];
  }
  for (let i = 1; i < n; i++) {
    if (!obstacleGrid[i][0]) dp[i][0] = dp[i - 1][0];
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (!obstacleGrid[i][j]) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[n - 1][m - 1];
};

// 空间优化
var uniquePathsWithObstacles = function (obstacleGrid) {
  var n = obstacleGrid.length,
    m = obstacleGrid[0].length;
  var dp = Array(m).fill(0);
  dp[0] = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (obstacleGrid[i][j]) dp[j] = 0;
      else if (j > 0) dp[j] = dp[j] + dp[j - 1];
    }
  }
  return dp[m - 1];
};

let res = uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]);

console.log(res);
