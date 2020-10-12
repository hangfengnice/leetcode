var getMinimumDifference = function (root) {
  let ans = Number.MAX_SAFE_INTEGER,
    pre = -1;
  dfs(root);
  return ans;
  function dfs(root) {
    if (!root) return;
    dfs(root.left);
    if (pre == -1) {
      pre = root.val;
    } else {
      ans = Math.min(ans, root.val - pre);
      pre = root.val;
    }
    dfs(root.right);
  }
};
