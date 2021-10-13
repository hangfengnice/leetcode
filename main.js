var solveNQueens = function (n) {
  let ans = [];
  let dp = new Array(n).fill(0).map(() => new Array(n).fill("."));

  dfs(dp, 0);
  return ans;

  function dfs(dp, row) {
    if (row === n) {
      return ans.push(dp.map((r) => r.join("")));
    }

    for (let col = 0; col < n; col++) {
      if (isValid(dp, row, col)) {
        dp[row][col] = "Q";
        dfs(dp, row + 1);
        dp[row][col] = ".";
      }
    }
  }
  function isValid(dp, row, col) {
    for (let i = 0; i < row; i++) {
      if (dp[i][col] === "Q") return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (dp[i][j] === "Q") return false;
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (dp[i][j] === "Q") return false;
    }
    return true;
  }
};
