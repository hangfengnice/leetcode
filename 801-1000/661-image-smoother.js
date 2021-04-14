var imageSmoother = function (M) {
  let R = M.length,
    C = M[0].length;
  let ans = Array.from({ length: R }, () => Array.from({ length: C }).fill(0));
  console.log(ans);
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      let count = 0;
      for (let nr = r - 1; nr <= r + 1; nr++) {
        for (let nc = c - 1; nc <= c + 1; nc++) {
          if (0 <= nr && nr < R && 0 <= nc && nc < C) {
            ans[r][c] += M[nr][nc];
            count++;
          }
        }
      }
      ans[r][c] = ~~(ans[r][c] / count);
    }
  }
  return ans;
};

let res = imageSmoother([[1]]);

console.log(res);
