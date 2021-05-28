var wordBreak = function (s, wordDict) {
  const len = s.length;
  const wordSet = new Set(wordDict);

  return canBreak(0);

  function canBreak(start) {
    if (start == len) return true;

    for (let i = start + 1; i <= len; i++) {
      const prefix = s.slice(start, i);
      if (wordSet.has(prefix) && canBreak(i)) return true;
    }
    return false;
  }
};

// 备忘录
var wordBreak = function (s, wordDict) {
  const len = s.length;
  const wordSet = new Set(wordDict);
  const memo = new Array(len);

  return canBreak(0);

  function canBreak(start) {
    if (start == len) return true;

    if (memo[start] != undefined) return memo[start];

    for (let i = start + 1; i <= len; i++) {
      const prefix = s.slice(start, i);
      console.log(prefix);

      if (wordSet.has(prefix) && canBreak(i)) {
        memo[start] = true;
        return true;
      }
    }
    memo[start] = false;
    return false;
  }
};

var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);

  const len = s.length;
  const visited = new Array(len);

  let queue = [0];

  while (queue.length) {
    const start = queue.shift();
    if (visited[start]) continue;

    visited[start] = true;

    for (let i = start + 1; i <= len; i++) {
      const prefix = s.slice(start, i);
      if (wordSet.has(prefix)) {
        if (i < len) {
          queue.push(i);
        } else {
          return true;
        }
      }
    }
  }
  return false;
};

var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const len = s.length;
  const dp = new Array(len + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (dp[i]) break;
      if (dp[j] == false) continue;
      const suffix = s.slice(j, i);
      if (wordSet.has(suffix) && dp[j]) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[len];
};

let res = wordBreak("leetcode", ["leet", "code"]);

console.log(res);
