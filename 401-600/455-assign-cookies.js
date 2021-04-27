var findContentChildren = function (g, s) {
  g = g.sort((a, b) => b - a);
  s = s.sort((a, b) => b - a);

  let gLen = g.length,
    sLen = s.length;
  let gi = 0,
    si = 0;
  let res = 0;
  while (gi < gLen && si < sLen) {
    if (s[si] >= g[gi]) {
      res++;
      gi++;
      si++;
    } else {
      gi++;
    }
  }
  return res;
};

let result = findContentChildren([1, 2, 3], [1, 1]);

console.log(result);
