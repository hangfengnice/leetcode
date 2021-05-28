var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;

  const used = new Array(m).fill(0).map(() => new Array(n));
  console.log(m)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == word[0] && canFind(i, j, 0)) {
        return true;
      }
    }
  }
  console.log(used);
  return false;

  function canFind(row, col, i) {
    console.log( i);
    if (i == word.length) return true;

    if (row < 0 || row == m || col < 0 || col == n) return false;

    if (used[row][col] || board[row][col] != word[i]) return false;
    console.log('here');
    used[row][col] = true;

    const flag =
      canFind(row + 1, col, i + 1) ||
      canFind(row - 1, col, i + 1) ||
      canFind(row, col + 1, i + 1) ||
      canFind(row, col - 1, i + 1);
    if (flag) return true;
    used[row][col] = false;
    return false;
  }
};

let res = exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")
console.log(res);
