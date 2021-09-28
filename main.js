var permuteUnique = function (nums) {
  const length = nums.length;
  const ans = [],
    vis = new Array(length).fill(false);
  nums.sort((a, b) => a - b);
  dfs(0, []);
  return ans;

  function dfs(idx, prem) {
    if (prem.length === length) {
      return ans.push(prem.slice());
    }
    for (let i = 0; i < length; i++) {
      if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
        continue;
      }
      vis[i] = true;
      prem.push(nums[i]);
      dfs(idx + 1, prem);
      vis[i] = false;
      prem.pop();
    }
  }
};
