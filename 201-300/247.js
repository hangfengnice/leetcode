var findStrobogrammatic = function (n) {
  return dfs(n, n);

  function dfs(n, m) {
    if (n === 0) return [""];
    if (n === 1) return ["1", "8", "0"];
    const list = dfs(n - 2, m);

    const res = [];
    for (let i = 0; i < list.length; i++) {
      const s = list[i];
      if (n !== m) res.push(`0${s}0`);
      res.push(`1${s}1`);
      res.push(`6${s}9`);
      res.push(`9${s}6`);
      res.push(`8${s}8`);
    }
    return res;
  }
};
