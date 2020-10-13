var uniquePaths = function (m, n) {
  let dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = Array(m);
    dp[i][0] = 1;
  }
  for (let r = 0; r < m; r++) dp[0][r] = 1;

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[n - 1][m - 1];
};

// 优化
var uniquePaths = function (m, n) {
  let pre = Array(n).fill(1);
  let cur = Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let r = 1; r < n; r++) {
      cur[r] = cur[r - 1] + pre[r];
    }
    pre = cur.slice();
  }
  return pre[n - 1];
};

// 优化2
var uniquePaths = function (m, n) {
  let cur = Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let r = 1; r < n; r++) {
      cur[r] = cur[r] + cur[r - 1];
    }
  }
  return cur[n - 1];
};

// 排列组合
var uniquePaths = function (m, n) {
  var N = n + m - 2;
  var k = m - 1;
  var result = 1;
  for (var i = 1; i <= k; i++) {
    result = (result * (N - k + i)) / i;
  }
  return result;
};

let res = uniquePaths(7, 3);

console.log(res);
