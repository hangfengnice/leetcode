var maxPower = function (s) {
  let ans = 1,
    cnt = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      ++cnt;
      ans = Math.max(ans, cnt);
    } else {
      cnt = 1;
    }
  }
  return ans;
};

// 双指针
var maxPower = function (s) {
  let n = s.length,
    ans = 1;
  for (let i = 0; i < n; ) {
    let j = i;
    while (j < n && s[j] === s[i]) {
      j++;
    }
    ans = Math.max(ans, j - i);
    i = j;
  }
  return ans;
};
