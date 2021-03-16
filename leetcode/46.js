var permute = function (nums) {
  let res = [];
  let visited = {};
  dfs([]);
  return res;
  function dfs(sub) {
    if (sub.length == nums.length) {
      res.push(sub.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[nums[i]] == undefined) {
        visited[nums[i]] = true;
        sub.push(nums[i]);
        dfs(sub);
        visited[nums[i]] = undefined;
        sub.pop();
      }
    }
  }
};
