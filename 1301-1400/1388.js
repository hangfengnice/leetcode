var maxSizeSlices = function (slices) {
  return Math.max(calculate(slices.slice(0, -1)), calculate(slices.slice(1)));

  function calculate(slice) {
    let n = slice.length;
    let choose = n + 1 / 3;
    let dp = new Array(n + 1).fill(0).map(() => new Array(choose + 1).fill(0));
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= choose; j++) {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          (i - 2 >= 0 ? dp[i - 2][j] : 0) + slice(i - 1)
        );
      }
    }
    return dp[n][choose];
  }
};

let res = maxSizeSlices([1, 3, 2])
console.log(res, 'res')
