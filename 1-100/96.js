var numTrees = function (n) {
  const G = new Array(n + 1).fill(0);
  G[0] = 1;
  G[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      G[i] += G[j - 1] * G[i - j];
    }
  }
  return G[n];
};

// 递归
var numTrees = function (n) {
  let meno = new Array(n).fill(0).map(() => new Array(n).fill(0));

  return count(1, n);

  function count(l, h) {
    if (l > h) return 1;

    if (meno[l][j]) return meno[l][j];

    let res = 0;

    for (let i = l; i <= h; i++) {
      let left = count(l, i - 1);
      let right = count(i + 1, h);
      res += left * right;
    }
    meno[l][j] = res;
    return res;
  }
};
