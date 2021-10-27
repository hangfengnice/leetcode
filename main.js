var inorderTraversal = function (root) {
  if (!root) return;
  let stack = [];
  let res = [];
  let node = root;
  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    let node = stack.pop();
    res.push(node.val);
    node = node.right;
  }
  return res;
};
