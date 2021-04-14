// 递归
var numSquares = function (n) {
  return dfs(n);

  function dfs(n) {
    if (n == 0) return 0;
    let count = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i * i <= n; i++) {
      count = Math.min(count, dfs(n - i * i) + 1);
    }
    return count;
  }
};

// 递归 备忘录
var numSquares = function (n) {
  let map = {};
  return dfs(n);

  function dfs(n) {
    if (map[n]) return map[n];
    if (n == 0) return 0;
    let count = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i * i <= n; i++) {
      count = Math.min(count, dfs(n - i * i) + 1);
    }
    map[n] = count;
    return count;
  }
};

// 动态规划
var numSquares = function (n) {
  let dp = [0];
  for (let i = 1; i <= n; i++) {
    let count = Number.MAX_SAFE_INTEGER;
    for (let j = 1; j * j <= i; j++) {
      count = Math.min(count, dp[i - j * j] + 1);
    }
    dp[i] = count;
  }
  return dp[n];
};

// bfs
var numSquares = function (n) {
  let queue = [n],
    visited = {},
    level = 0;
  while (queue.length) {
    level++;
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let cur = queue.pop();
      for (let j = 1; j * j <= cur; j++) {
        let temp = cur - j * j;
        if (!temp) return level;
        if (!visited[temp]) {
          queue.unshift(temp);
          visited[temp] = true;
        }
      }
    }
  }
};

// 数学运算
var numSquares = function (n) {
  if (Math.pow(Math.floor(Math.sqrt(n)), 2) === n) return 1;
  while (n % 4 === 0) {
    n = n / 4;
  }
  if ((n - 7) % 8 === 0) {
    return 4;
  }
  for (let y, x = 1; x * x < n; x++) {
    y = Math.floor(Math.sqrt(n - x * x));
    if (x * x + y * y === n) return 2;
  }
  return 3;
};

let res = numSquares(13);

console.log(res);
