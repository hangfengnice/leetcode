var totalNQueens = function (n) {
  let result = [];
  let results = [];
  dfs(0);
  return results.length;

  function dfs(row) {
    if (row == n) {
      results.push(
        result.map((c) => ".".repeat(c) + "Q" + ".".repeat(n - 1 - c))
      );
      return;
    }
    for (let j = 0; j < n; j++) {
      if (canSave(row, j)) {
        result[row] = j;
        dfs(row + 1);
      }
    }
  }

  function canSave(row, column) {
    let left = column - 1;
    let right = column + 1;
    for (let i = row - 1; i >= 0; i--) {
      if (result[i] == column) return;
      if (left >= 0 && result[i] == left) return false;
      if (right < n && result[i] == right) return false;
      left--;
      right++;
    }
    return true;
  }
};

let res = totalNQueens(4);
console.log(res);
