var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let res = [];
  dfs(0, [], 0);
  return res;
  function dfs(start, temp, sum) {
    if (sum >= target) {
      if (sum == target) {
        res.push(temp.slice());
      }
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] == candidates[i - 1]) continue;
      temp.push(candidates[i]);
      dfs(i + 1, temp, sum + candidates[i]);
      temp.pop();
    }
  }
};
