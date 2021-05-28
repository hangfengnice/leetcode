var diameterOfBinaryTree = function (root) {
  let ans = 1;
  depth(root);
  return ans - 1;

  function depth(node) {
    if (!node) return 0;

    let l = depth(node.left);
    let r = depth(node.right);

    ans = Math.max(ans, l + r + 1);

    return Math.max(l, r) + 1;
  }
};
