var solveNQueens = function (n) {
  let result = new Array(n);
  let results = [];

  Nqueens(0);
  return results;

  function Nqueens(row) {
    if (row == n) {
      results.push(format(result));
      return;
    }
    for (let j = 0; j < n; j++) {
      if (dfs(row, j)) {
        result[row] = j;
        Nqueens(row + 1);
      }
    }
  }

  function dfs(row, column) {
    let leftColumn = column - 1;
    let rightColumnn = column + 1;

    for (let i = row - 1; i >= 0; i--) {
      if (result[i] == column) return false;
      if (leftColumn >= 0 && result[i] == leftColumn) return false;
      if (rightColumnn < n && result[i] == rightColumnn) return false;

      leftColumn--;
      rightColumnn++;
    }
    return true;
  }

  function format(result) {
    let tempResult = [];
    for (let i = 0; i < n; i++) {
      let str = "";
      for (let j = 0; j < n; j++) {
        if (result[i] == j) {
          str += "Q";
        } else {
          str += ".";
        }
      }
      tempResult.push(str);
    }
    return tempResult;
  }
};

var solveNQueens = function (n) {
  let result = new Array(n);
  let results = [];
  Nqueens(0);
  return results;

  function Nqueens(row) {
    if (row == n) {
      results.push(
        result.map((c) => ".".repeat(c) + "Q" + ".".repeat(n - 1 - c))
      );
      return;
    }
    for (let i = 0; i < n; i++) {
      if (dfs(row, i)) {
        result[row] = i;
        Nqueens(row + 1);
      }
    }
  }
  function dfs(row, column) {
    let leftColumn = column - 1;
    let rightColumn = column + 1;
    for (let i = row - 1; i >= 0; i--) {
      if (result[i] == column) return false;
      if (leftColumn >= 0 && result[i] == leftColumn) return false;
      if (rightColumn < n && result[i] == rightColumn) return false;
      leftColumn--;
      rightColumn++;
    }
    return true;
  }
};

var solveNQueens = function (n) {
  let result = [];

  dfs();

  return result;

  function dfs(sub = [], row = 0) {
    if (row == n) {
      result.push(sub.map((c) => ".".repeat(c) + "Q" + ".".repeat(n - 1 - c)));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (
        !sub.some(
          (j, k) => j === col || j - col === row - k || j - col === k - row
        )
      ) {
        sub.push(col);
        dfs(sub, row + 1);
        sub.pop();
      }
    }
  }
};
let res = solveNQueens(4);

console.log(res);
