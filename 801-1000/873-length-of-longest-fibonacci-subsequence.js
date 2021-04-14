var lenLongestFibSubseq = function (A) {
  let s = new Set(A),
    len = A.length;
  let count = 2;
  let max = 0;
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      count = 2;
      let f1 = A[i];
      let f2 = A[j];
      let f3 = f1 + f2;
      while (s.has(f3)) {
        count++;
        if (count > max) max = count;
        f1 = f2;
        f2 = f3;
        f3 = f1 + f2;
      }
    }
  }
  return max;
};

// 动态规划
var lenLongestFibSubseq = function (A) {
  let map = {},
    len = A.length;
  for (let i = 0; i < len; i++) {
    map[A[i]] = i;
  }
  let max = 0;
  let dp = Array.from(Array(len), () => Array(len).fill(2));

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len; j++) {
      let f2 = A[i];
      let f3 = A[j];
      let f1 = f3 - f2;
      if (f1 < f2 && map[f1] != undefined) {
        dp[i][j] = Math.max(dp[map[f1]][i] + 1, dp[i][j]);
        max = Math.max(max, dp[i][j]);
      }
    }
  }
  return max;
};

let result = lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(result);
