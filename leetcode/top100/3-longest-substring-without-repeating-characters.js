// 官方
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  const n = s.length;
  let rk = -1,
    ans = 0;
  for (let i = 0; i < n; i++) {
    if (i) {
      set.delete(s[i - 1]);
    }
    while (rk + 1 < n && !set.has(s[rk + 1])) {
      set.add(s[rk + 1]);
      rk++;
    }
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};

// 超时间了
var lengthOfLongestSubstring = function (s) {
  let len = s.length,
    ans = 0;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      if (allUnique(i, j)) ans = Math.max(ans, j - i);
    }
  }
  return ans;

  function allUnique(start, end) {
    let set = new Set();
    for (let i = start; i < end; i++) {
      if (set.has(s[i])) return false;
      set.add(s[i]);
    }
    return true;
  }
};

// 滑动窗口
var lengthOfLongestSubstring = function (s) {
  let n = s.length;
  let set = new Set();
  let ans = 0,
    i = 0,
    j = 0;
  while (i < n && j < n) {
    if (!set.has(s[j])) {
      set.add(s[j++]);
      ans = Math.max(j - i, ans);
    } else {
      set.delete(s[i++]);
    }
  }
  return ans;
};

// 滑动窗口 优化
var lengthOfLongestSubstring = function (s) {
  let n = s.length,
    ans = 0;
  let map = {},
    i = 0;
  for (let j = 0; j < n; j++) {
    if (map[s[j]] != undefined) {
      i = Math.max(map[s[j]], i);
    }
    ans = Math.max(ans, j - i + 1);
    map[s[j]] = j + 1;
  }
  return ans;
};

// 数组 abcabcbb
var lengthOfLongestSubstring = function (s) {
  let n = s.length,
    ans = 0,
    arr = Array.from({ length: 129 }, () => 0),
    i = 0;
  for (let j = 0; j < n; j++) {
    i = Math.max(arr[s.codePointAt(j)], i);
    ans = Math.max(ans, j - i + 1);
    arr[s.codePointAt(j)] = j + 1;
  }
  return ans;
};

let res = lengthOfLongestSubstring("aaa");

console.log(res);
