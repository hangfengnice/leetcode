var treeToDoublyList = function (root) {
  if (!root) return null;
  let first = null,
    last = null;

  helper(root);
  first.left = last;
  last.right = first;
  return first;

  function helper(node) {
    if (!!node) {
      helper(node.left);

      if (last !== null) {
        last.right = node;
        node.left = last;
      } else {
        first = node;
      }

      last = node;

      helper(node.right);
    }
  }
};
