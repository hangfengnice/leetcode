var findTilt = function (root) {
  let ans = 0;
  dfs(root);

  return ans;

  function dfs(node) {
    if (!node) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);

    ans += Math.abs(left - right);

    return left + right + node.val;
  }
};
