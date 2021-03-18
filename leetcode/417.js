var pacificAtlantic = function (matrix) {
  if (!matrix || !matrix[0] || !matrix[0].length) return []
  let m = matrix.length;
  let n = matrix[0].length;
  const flow1 = Array.from({ length: m }, () => {
    return Array.from({ length: n }, () => false);
  });
  const flow2 = Array.from({ length: m }, () => {
    return Array.from({ length: n }, () => false);
  });

  console.log(flow1, flow2);

  for (let i = 0; i < m; i++) {
    dfs(i, 0, flow1);
    dfs(i, n - 1, flow2);
  }
  for (let i = 0; i < n; i++) {
    dfs(0, i, flow1);
    dfs(m - 1, i, flow2);
  }
  const res = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (flow1[i][j] && flow2[i][j]) {
        res.push([i, j]);
      }
    }
  }
  return res;
  function dfs(r, c, flow) {
    flow[r][c] = true;
    [
      [r - 1, c],
      [r + 1, c],
      [r, c - 1],
      [r, c + 1],
    ].forEach(([nr, nc]) => {
      if (
        nc >= 0 &&
        nc < n &&
        nr >= 0 &&
        nr < m &&
        !flow[nr][nc] &&
        matrix[nr][nc] >= matrix[r][c]
      ) {
        dfs(nr, nc, flow);
      }
    });
  }
};

let res = pacificAtlantic([
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
]);

console.log(res);
