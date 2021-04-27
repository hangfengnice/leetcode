var getMinimumDifference = function (root) {
  let preOrder = -1;
  let min = Number.MAX_SAFE_INTEGER;
  dfs(root);
  return min;
  function dfs(root) {
    if (!root) return;
    dfs(root.left);
    if (preOrder == -1) {
      preOrder = root.val;
    } else {
      min = Math.min(min, root.val - preOrder);
      preOrder = root.val;
    }
    dfs(root.right);
  }
};
