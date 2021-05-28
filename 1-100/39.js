var combinationSum = function (candidates, target) {
  let res = [];
  dfs(0, [], 0);
  return res;
  function dfs(start, temp, sum) {
    if (sum >= target) {
      if (sum == target) res.push(temp.slice());
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      temp.push(combinationSum[i]);
      dfs(i, temp, sum + candidates[i]);
      temp.pop();
    }
  }
};
