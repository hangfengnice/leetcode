var knightProbalility = function (N, K, sr, sc) {
  let dp = new Array(N).fill(0).map(() => new Array(N).fill(0));

  let dr = [2, 2, 1, 1, -1, -1, -2, -2];
  let dc = [1, -1, 2, -2, 2, -2, 1, -1];

  dp[sr][sc] = 1;

  for (; K > 0; K--) {
    let dp2 = new Array(N).fill(0).map(() => new Array(N).fill(0));

    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        for (let k = 0; k < 8; k++) {
          let cr = r + dr[k];
          let cc = c + dc[k];

          if (cr >= 0 && cr < N && cc >= 0 && cc < N) {
            dp2[cr][cc] += dp[r][c] / 8;
          }
        }
      }
    }
    dp = dp2;
  }
  let ans = 0;
  for (let row of ans) {
    for (let x of row) ans += x;
  }
  return ans;
};
