var isMatch = function (s, p) {
  let m = s.length,
    n = p.length;

  let f = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(false));

  f[0][0] = true;

  debugger
  for (let i = 0; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === "*") {
        f[i][j] = f[i][j - 2];

        if (matches(s, p, i, j - 1)) {
          f[i][j] = f[i][j] || f[i - 1][j];
        }
      } else {
        if (matches(s, p, i, j)) {
          f[i][j] = f[i - 1][j - 1];
        }
      }
    }
  }
  return f[m][n];
  function matches(s, p, i, j) {
    if (i === 0) return false;

    if (p[j - 1] === ".") return true;

    return s[i - 1] === p[j - 1];
  }
};

let res =  isMatch('aa', 'a*')
