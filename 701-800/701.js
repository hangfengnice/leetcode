var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  let pos = root;
  while (pos) {
    if (pos.val < val) {
      if (pos.right) {
        pos = pos.right;
      } else {
        pos.right = new TreeNode(val);
        break;
      }
    }

    if (pos.val > val) {
      if (pos.left) {
        pos = pos.left;
      } else {
        pos.left = new TreeNode(val);
        break;
      }
    }
  }
  return root;
};
