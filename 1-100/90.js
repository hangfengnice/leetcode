var subsetsWithDup = function (nums) {
  let n = nums.length;
  nums.sort((a, b) => a - b);

  let res = [];
  let has = {};

  dfs([], 0);

  return res;
  function dfs(sub, start) {
    res.push(sub.slice());

    for (let i = start; i < n; i++) {
      if (has[i] || (i > 0 && !has[i - 1] && nums[i - 1] == nums[i])) continue;
      has[i] = true;
      sub.push(nums[i]);
      dfs(sub, i + 1);
      sub.pop();
      has[i] = false;
    }
  }
};
