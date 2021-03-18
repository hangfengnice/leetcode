var solveSudoku = function (board) {
  slove(board);
  return board;

  function slove(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] == ".") {
          for (let num = 1; num < 10; num++) {
            if (isValid(i, j, num)) {
              board[i][j] = String(num);
              if (slove(board)) {
                return true;
              }
              board[i][j] = ".";
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  function isValid(row, col, num) {
    for (let i = 0; i < 9; i++) {
      let boxRow = parseInt(row / 3) * 3;
      let boxCol = parseInt(col / 3) * 3;
      if (
        board[row][i] == num ||
        board[i][col] == num ||
        board[boxRow + (i % 3)][boxCol + (i % 3)] == num
      ) {
        return false;
      }
    }
    return true;
  }
};

var solveSudoku = function (board) {
  fill(0, 0);
  return board;

  function fill(i, j) {
    if (j == 9) {
      i++;
      j = 0;
      if (i == 9) return true;
    }
    if (board[i][j] != ".") return fill(i, j + 1);

    for (let num = 1; num < 10; num++) {
      if (hasConflit(i, j, String(num))) continue;

      board[i][j] = String(num);

      if (fill(i, j + 1)) return true;
      board[i][j] = ".";
    }
    return false;
  }

  function hasConflit(r, c, val) {
    for (let i = 0; i < 9; i++) {
      if (board[i][c] == val || board[r][i] == val) return true;
    }

    const subRowStart = Math.floor(r / 3) * 3;
    const subColStart = Math.floor(c / 3) * 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (val == board[subRowStart + i][subColStart + j]) {
          // 发现了重复数
          return true;
        }
      }
    }
    return false;
  }
};

var solveSudoku = function (board) {
  const rows = new Array(9);
  const cols = new Array(9);
  const blocks = new Array(9);

  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  for (let i = 0; i < 9; i++) {
    // 集合的初始化
    rows[i] = new Set(options);
    cols[i] = new Set(options);
    blocks[i] = new Set(options);
  }

  const getBlockIndex = (i, j) => {
    return (((i / 3) | 0) * 3 + j / 3) | 0;
  };

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] != ".") {
        let val = board[i][j];
        rows[i].delete(val);
        cols[j].delete(val);
        blocks[getBlockIndex(i, j)].delete(val);
      }
    }
  }
  fill(0, 0);
  return board;

  function fill(i, j) {
    if (j == 9) {
      i++;
      j = 0;
      if (i == 9) return true;
    }

    if (board[i][j] != ".") return fill(i, j + 1);

    const blockIndex = getBlockIndex(i, j);

    for (let num = 1; num < 10; num++) {
      const s = String(num);
      if (!rows[i].has(s) || !cols[j].has(s) || !blocks[blockIndex].has(s))
        continue;

      board[i][j] = s; // 作出选择
      rows[i].delete(s); // 更新set们，删掉这个可填选项
      cols[j].delete(s);
      blocks[blockIndex].delete(s);

      if (fill(i, j + 1)) return true; // 如果基于当前选择，填下一个，最后可解出数独，直接返回真
      // 基于当前选择，填下一个，怎么填都不行，回溯，恢复为空白格
      board[i][j] = ".";
      rows[i].add(s); // set们，将之前删掉的当前数字，加回来
      cols[j].add(s);
      blocks[blockIndex].add(s);
    }
    return false;
  }
};
