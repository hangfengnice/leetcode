var kthSmallest = function (root, k) {
  let stack = [];
  while (true) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    let node = stack.pop();
    if (--k === 0) return node.val;
    root = node.right;
  }
};
