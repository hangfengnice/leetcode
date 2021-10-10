var countSubstrings = function (s) {
  let n = s.length;
  let dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
  let result = 0;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (s[i] === s[j] && (j - i <= 1 || dp[i + 1][j - 1])) {
        result++;
        dp[i][j] = true;
      }
    }
  }
  return result;
};


// ![回文自创](https://leetcode-cn.com/problems/palindromic-substrings/solution/hui-wen-zi-chuan-by-leetcode-solution/)
