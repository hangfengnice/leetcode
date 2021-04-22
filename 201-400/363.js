var maxSumSubmatrix = function (matrix, k) {
  let row = matrix.length;
  let column = matrix[0].length;

  let b = new Array(column).fill(0);

  let res = -Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < row; i++) {
    for (let t = 0; t < column; t++) b[t] = 0;

    for (let j = i; j < row; j++) {
      for (let k = 0; k < column; k++) b[k] += matrix[j][k];

      for (let m = 0; m < column; m++) {
        let sum = 0;
        for (let n = m; n < column; n++) {
          sum += b[n];
          if (sum <= k && sum > res) {
            res = sum;
          }
        }
      }
    }
  }
  return res;
};
