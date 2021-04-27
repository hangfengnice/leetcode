var partition = function (s) {
  const res = [];
  const memo = new Array(s.length).fill(0).map(() => new Array(s.length));
  dfs([], 0);
  return res;

  function dfs(temp, start) {
    if (start == s.length) {
      res.push(temp.slice());
      return;
    }
    for (let i = start; i < s.length; i++) {
      if (memo[start][i] === false) {
        continue;
      }
      if (memo[start][i] || isPali(s, start, i)) {
        temp.push(s.substring(start, i + 1));
        dfs(temp, i + 1);
        temp.pop();
      }
    }
  }

  function isPali(s, l, r) {
    while (l < r) {
      if (s[l] != s[r]) {
        memo[l][r] = false;
        return false;
      }
      l++;
      r--;
    }
    memo[l][r] = true;
    return true;
  }
};

var partition = function (s) {
  let n = s.length;
  let res = [],
    ans = [];
  let f = new Array(n).fill(0).map(() => new Array(n));
  dfs(0);

  return res;

  function dfs(i) {
    if (i === n) {
      res.push(ans.slice());
      return;
    }
    for (let j = i; j < n; j++) {
      if (isPalindrome(i, j)) {
        ans.push(s.slice(i, j + 1));
        dfs(j + 1);
        ans.pop();
      }
    }
  }
  function isPalindrome(i, j) {
    if (f[i][j]) {
      return true;
    }
    if (i >= j) {
      f[i][j] = true;
    } else if (s[i] == s[j]) {
      f[i][j] = isPalindrome(i + 1, j - 1);
    } else {
      f[i][j] = false;
    }
    return f[i][j];
  }
};
