// var numIslands = function (grid) {
//   let count = 0;
//   let m = grid.length;
//   let n = grid[0].length;
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (grid[i][j] == "1") {
//         count++;
//         dfs(i, j);
//       }
//     }
//   }
//   return count;
//   function dfs(i, j) {
//     if (i < 0 || i == m || j < 0 || j == n || grid[i][j] == "0") return false;
//     grid[i][j] = "0";
//     dfs(i + 1, j);
//     dfs(i - 1, j);
//     dfs(i, j + 1);
//     dfs(i, j - 1);
//   }
// };

// 迭代
function numIslands(grid) {
  let m = grid.length;
  let n = grid[0].length;
  let count = 0;
  let queue = [];
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == "1") {
        count++;
        grid[i][j] = "0";
        queue.push([i, j]);
        bfs(queue);
      }
    }
  }
  return count;
  function bfs(queue) {

    while (queue.length) {
      let cur = queue.shift();
      for (const dir of dirs) {
        let x = cur[0] + dir[0];
        let y = cur[1] + dir[1];
        if (x < 0 || x == m || y < 0 || y == n || grid[x][y] == "0") {
          continue;
        }

        grid[x][y] = "0";
        queue.push([x, y]);
      }
    }
  }
}

let res = numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
]);
console.log(res);
