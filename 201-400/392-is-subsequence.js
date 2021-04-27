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
// var isSubsequence = function (s, t) {
//   let n = s.length, m = t.length
//   let f = Array.from(Array(m + 1), () => [])
//   for(let i = 0; i < 26; i ++) {
//     f[m][i] = m
//   }
// }
