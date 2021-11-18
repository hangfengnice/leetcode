var findTilt = function (root) {
  if (!root) return 0;

  let ans = 0;
  dfs(root);
  return ans;

  function dfs(node) {
    if (!node) return 0;
    const sumLeft = dfs(node.left);
    const sumRight = dfs(node.right);

    ans += Math.abs(sumLeft - sumRight);
    return sumLeft + sumRight + node.val;
  }
};
