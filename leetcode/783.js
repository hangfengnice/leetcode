var minDiffInBST = function(root) {
  let min = Number.MAX_SAFE_INTEGER
  let pre = -1

  dfs(root)
  return min
  function dfs(root) {
    if (!root) return

    dfs(root.left)
    if (pre == - 1) {
      pre = root.val
    } else {
      min = Math.min(min, root.val - pre)
    }
    if ( min == 1) return
    dfs(root.right)
  }
};
