var numSquares = function (n) {
  const f = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    let min = n;
    for (let j = 1; j * j <= i; j++) {
      min = Math.min(min, f[i - j * j]);
    }
    f[i] = min + 1;
  }
  return f[n];
};
