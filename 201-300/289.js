// 二维数组中对 周围 8 个 或者 9 个 元素的 范围遍历

var gameOfLife = function (board) {
  // 1
  let neighbors = [0, 1, -1];
  let rows = board.length;
  let cols = board[0].length;

  let copyboard = new Array(rows)
    .fill(0)
    .map((_, index) => board[index].slice());

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let liveNeighbors = 0;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          // 2
          if (!(neighbors[i] === 0 && neighbors[j] === 0)) {
            let r = row + neighbors[i];
            let c = col + neighbors[j];

            if (
              r < rows &&
              r >= 0 &&
              c < cols &&
              c >= 0 &&
              copyboard[r][c] === 1
            ) {
              liveNeighbors++;
            }
          }
        }
      }

      if (
        copyboard[row][col] === 1 &&
        (liveNeighbors < 2 || liveNeighbors > 3)
      ) {
        board[row][col] = 0;
      }

      if (copyboard[row][col] === 0 && liveNeighbors === 3) {
        board[row][col] = 1;
      }
    }
  }
};

let res = gameOfLife([
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
]);

console.log(res, "res");
