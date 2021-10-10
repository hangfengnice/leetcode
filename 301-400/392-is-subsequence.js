var isSubsequence = function (s, t) {
  let n = s.length,
    m = t.length;
  let i = 0,
    j = 0;
  while (i < n && j < m) {
    if (s[i] == t[j]) {
      i++;
    }
    j++;
  }
  return i == n;
};

// 动态规划
var isSubsequence = function (s, t) {
  let n = s.length,
    m = t.length;
  let f = Array.from(Array(m + 1), () => []);
  for (let i = 0; i < 26; i++) {
    f[m][i] = m;
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = 0; j < 26; j++) {
      if (t[i].codePointAt() === j + 97) {
        f[i][j] = i;
      } else {
        f[i][j] = f[i + 1][j];
      }
    }
  }

  let add = 0;
  for (let i = 0; i < n; i++) {
    if (f[add][s[i].codePointAt() - 97] === m) {
      return false;
    }
    add = f[add][s[i].codePointAt() - 97] + 1;
  }
  return true;
};
