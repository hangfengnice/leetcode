var minimumTotal = function (triangle) {
  var dp = triangle.slice();
  for (let i = dp.length - 2; i >= 0; i--) {
    for (let j = 0; j < dp[i].length; j++) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + dp[i][j];
    }
  }
  return dp[0][0];
};

// // 优化空间 直接在原来的数值上操作
// var minimumTotal = function (triangle) {

// }

// 自底向上
var minimumTotal = function (triangle) {
  let dp = Array(triangle.length + 1).fill(0);
  for (let i = triangle.length - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }
  return dp[0];
};

// 递归
var minimumTotal = function (triangle) {
  let len = triangle.length;
  let row = 0,
    col = 0;
  return dfs(row, col);
  function dfs(row, col) {
    if (row == len - 1) return triangle[row][col];
    let left = dfs(row + 1, col);
    let right = dfs(row + 1, col + 1);
    return Math.min(left, right) + triangle[row][col];
  }
};

// 递归 备忘录
var minimumTotal = function (triangle) {
  let len = triangle.length;
  let row = 0,
    col = 0;
  let meno = Array(len).fill(0);
  return dfs(row, col);
  function dfs(row, col) {
    if (row == len - 1) {
      return (meno[row][col] = triangle[row][col]);
    }
    let left = dfs(row + 1, col);
    let right = dfs(row + 1, col + 1);
    return Math.min(left, right) + triangle[row][col];
  }
};
