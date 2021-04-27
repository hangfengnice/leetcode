var permuteUnique = function (nums) {
  const ans = [];
  const vis = new Array(nums.length).fill(false);
  nums.sort((a, b) => a - b);

  backtrack(0, []);
  return ans;

  function backtrack(idx, prem) {
    if (idx == nums.length) {
      ans.push(prem.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (vis[i] || (i > 0 && nums[i] == nums[i - 1] && !vis[i - 1])) {
        continue;
      }
      prem.push(nums[i]);
      vis[i] = true;
      backtrack(idx + 1, prem);
      vis[i] = false;
      prem.pop();
    }
  }
};
