var invertTree = function (root) {
  if (!root) return null;

  let right = invertTree(root.right);
  let left = invertTree(root.left);

  root.right = left;
  root.left = right;

  return root;
};
