var setZeroes = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let row = new Array(m).fill(false);
  let col = new Array(n).fill(false);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        row[i] = col[j] = true;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }
};

var setZeroes = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let flagCol0 = false,
    flagRow0 = false;

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] == 0) {
      flagCol0 = true;
      break;
    }
  }
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] == 0) {
      flagRow0 = true;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (flagCol0) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
  if (flagRow0) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }
};

var setZeroes = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let flagCol0 = false;
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] == 0) {
      flagCol0 = true;
    }
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
    if (flagCol0) {
      matrix[i][0] = 0;
    }
  }
};
