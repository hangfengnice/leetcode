var shortestWay = function (source, target) {
  let n = source.length;
  let j = 0;
  let count = 0;
  let len = target.length;
  while (j < len) {
    let prev = j;
    for (let i = 0; i < n; i++) {
      if (j < len && source[i] === target[j]) {
        j++;
      }
    }
    if (prev === j) return -1;
    count++;
  }
  return count;
};

// 动态规划
var shortestWay = function (a, b) {
  let m = b.length;
  let vis = new Array(26).fill(0);

  for (let ch of a) {
    vis[ch.codePointAt() - 97] = 1;
  }
  for (let ch of b) {
    if (!vis[ch.codePointAt() - 97]) {
      return -1;
    }
  }

  let temp = "";
  let f0 = 1,
    f1;

  for (let ch of b) {
    temp += ch;
    f1 = f0;

    if (!isXu(temp, a)) {
      tmp = "";
      tmp += ch;
      f1++;
    }
    f0 = f1;
  }
  return f0;
};
