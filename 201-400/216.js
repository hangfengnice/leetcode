var combinationSum3 = function (k, n) {
  let res = [];
  dfs(1, [], 0);
  return res;
  function dfs(start, temp, sum) {
    if (sum >= n) {
      if (sum == n && k == temp.length) res.push(temp.slice());
      return;
    }
    for (let i = start; i <= 9; i++) {
      temp.push(i);
      dfs(i + 1, temp, sum + i);
      temp.pop();
    }
  }
};

var combinationSum3 = function (k, n) {
  let temp = [];
  let ans = [];
  for (let mask = 0; mask < 1 << 9; mask++) {
    if (check(mask, k, n)) {
      ans.push(temp);
    }
  }
  return ans;

  function check(mask, k, n) {
    temp = [];
    for (let i = 0; i < 9; i++) {
      if ((1 << i) & mask) {
        temp.push(i + 1);
      }
    }
    return temp.length == k && temp.reduce((prev, next) => prev + next, 0) == n;
  }
};
