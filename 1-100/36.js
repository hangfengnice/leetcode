var isValidSudoku = function (board) {
  return dfs(board, 0, 0);
  function dfs(board, row, col) {
    if (row === 9) return true;
    if (col === 9) return dfs(board, row + 1, 0);

    if (board[row][col] === ".") return dfs(board, row, col + 1);

    if (valid(board, row, col)) {
      return dfs(board, row, col + 1);
    }
    return false;
  }

  function valid(board, row, col) {
    let ch = board[row][col];
    let box = new Set()
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === ch && i !== col) return false;
      if (board[i][col] === ch && i !== row) return false;

      if (box.has(ch)) {
        return false
      }
      box.add(ch)
    }
    return true;
  }
};
