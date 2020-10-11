var minPathSum = function (grid) {
  let n = grid.length;
  let m = grid[0].length;
  let dp = Array.from(Array(n), () => Array(m));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i && j) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      } else if (!i && j) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      } else if (i && !j) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      } else if (!i && !j) {
        dp[i][j] = grid[i][j];
      }
    }
  }
  return dp[n - 1][m - 1];
};

// 空间优化
var minPathSum = function (grid) {
  let n = grid.length;
  let m = grid[0].length;
  let dp = Array(n);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i && j) {
        dp[j] = Math.min(dp[j - 1], dp[j]) + grid[i][j];
      } else if (!i && j) {
        dp[j] = dp[j - 1] + grid[i][j];
      } else if (i && !j) {
        dp[j] = dp[j] + grid[i][j];
      } else if (!i && !j) {
        dp[j] = grid[i][j];
      }
    }
  }
  return dp[m - 1];
};

// 空间再优化 直接操作原来的数组 不太好
