var preorderTraversal = function (root) {
  let res = [];
  traversal(root);
  return res;
  function traversal(root) {
    if (root) {
      res.push(root.val);
      traversal(root.left);
      traversal(root.right);
    }
  }
};


var preorderTraversal = function (root) {
  let res = []
  if (!root) return res
  let stack = [root]
  while(stack.length) {
    const node = stack.pop()
    res.push(node.val)

    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
  return res
};
