var combine = function (n, k) {
  let res = [];
  dfs([], 1);
  return res;
  function dfs(sub, idx) {
    if (sub.length == k) {
      return res.push(sub.slice());
    }
    for (let i = idx; i <= n; i++) {
      sub.push(i);
      dfs(sub, i + 1);
      sub.pop();
    }
  }
};

var combine = function (n, k) {
  const ans = [];
  dfs(1, n, k, []);

  return ans;
  function dfs(cur, n, k, temp) {
    if (temp.length + (n - cur + 1) < k) return;

    if (temp.length == k) {
      ans.push(temp);
      return;
    }
    dfs(cur + 1, n, k, [...temp, cur]);
    dfs(cur + 1, n, k, temp);
  }
};

var res = combine(4, 2);

var combine = function (n, k) {
  const temp = [];
  const ans = [];
  for (let i = 1; i <= k; i++) {
    temp.push(i);
  }
  temp.push(n + 1);

  let j = 0;
  while (j < k) {
    ans.push(temp.slice(0, k));
    j = 0;
    while (j < k && temp[j] + 1 == temp[j] + 1) {
      temp[j] = j + 1;
      ++j;
    }
    ++temp[j];
  }
  return ans;
};
