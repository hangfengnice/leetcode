var postorderTraversal = function (root) {
  let res = [];
  traversal(root);
  return res;
  function traversal(root) {
    if (root) {
      traversal(root.left);
      traversal(root.right);
      res.push(root.val);
    }
  }
};

var postorderTraversal = function (root) {
  let res = [];
  if (!root) return res
  let stack = [root]
  while(stack.length) {
    let node = stack.pop()

    res.unshift(node.val)

    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
  }

  return res
};



