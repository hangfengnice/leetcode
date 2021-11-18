var findPaths = function (m, n, maxMove, startRow, startColumn) {
  let mod = 1000000007;
  let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let outCounts = 0;
  let dp = new Array(maxMove + 1)
    .fill(0)
    .map(() => new Array(m).fill(0).map(() => new Array(n).fill(0)));

  dp[0][startRow][startColumn] = 1;

  for (let i = 0; i < maxMove; i++) {
    for (let j = 0; j < m; j++) {
      for (let k = 0; k < n; k++) {
        let count = dp[i][j][k];
        if (count > 0) {
          for (let direction of directions) {
            let j1 = j + direction[0],
              k1 = k + direction[1];

            if (j1 >= 0 && j1 < m && k1 >= 0 && k1 < n) {
              dp[i + 1][j1][k1] = (dp[i + 1][j1][k1] + count) % mod;
            } else {
              outCounts = (outCounts + count) % mod;
            }
          }
        }
      }
    }
  }
  return outCounts;
};
