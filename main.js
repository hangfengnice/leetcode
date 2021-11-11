var maxSumSubmatrix = function (matrix, k) {
  let rows = matrix.length,
    cols = matrix[0].length,
    max = -Infinity;

  for (let i1 = 1; i1 <= rows; i1++) {
    for (let j1 = 1; j1 <= cols; j1++) {
      let dp = new Array(rows + 1)
        .fill(0)
        .map(() => new Array(cols + 1).fill(0));
      dp[i1][j1] = matrix[i1 - 1][j1 - 1];

      for (let i2 = i1; i2 <= rows; i2++) {
        for (let j2 = j1; j2 <= cols; j2++) {
          dp[i2][j2] =
            dp[i2 - 1][j] +
            dp[i2][j2 - 1] -
            dp[i2 - 1][j2 - 1] +
            matrix[i2 - 1][j2 - 1];
          if (dp[i2][j2] <= k && dp[i2][j2] > max) max = dp[i2][j2];
          if (dp[i2][j2] === k) return k;
        }
      }
    }
  }
  return max;
};
