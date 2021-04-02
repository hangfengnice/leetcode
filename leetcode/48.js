var rotate = function (matrix) {
  let n = matrix.length;
  let ans = new Array(n).fill(0).map(() => new Array(n));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      ans[j][n - i - 1] = matrix[i][j];
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = ans[i][j];
    }
  }
};

var rotate = function (matrix) {
  let n = matrix.length;
  let row = Math.floor(n / 2);

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < n; j++) {
      [matrix[i][j], matrix[n - i - 1][j]] = [
        matrix[n - i - 1][j],
        matrix[i][j],
      ];
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};
