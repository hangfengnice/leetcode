var minFallingPathSum = function (matrix) {
  let N = matrix.length;
  for (let r = N - 2; r >= 0; r--) {
    for (let c = 0; c < N; c++) {
      let best = matrix[r + 1][c];

      if (c > 0) {
        best = Math.min(best, matrix[r + 1][c - 1]);
      }
      if (c + 1 < N) {
        best = Math.min(best, matrix[r + 1][c + 1]);
      }

      matrix[r][c] += best;
    }
  }
  let min = Infinity;
  for (let val of matrix[0]) {
    min = Math.min(val, min);
  }
  return min;
};
