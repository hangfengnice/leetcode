var setZeroes = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  console.log(m, n);
  let rows = new Array(m).fill(false);
  let cols = new Array(n).fill(false);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {

      if (!matrix[i][j]) {
        rows[i] = cols[j] = true;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rows[i] || cols[j]) {
        matrix[i][j] = 0;
      }
    }
  }
};


let res = setZeroes([[1,1,1],[1,0,1],[1,1,1]])
