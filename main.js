var binaryTreePaths = function (root) {
  const paths = [];
  if (root === null) {
    return paths;
  }
  const nodeQueue = [root];
  const pathQueue = [String(root.val)];

  while (nodeQueue.length) {
    const node = nodeQueue.shift();
    const path = pathQueue.shift();

    if (!node.left && !node.right) {
      paths.push(path);
    } else {
      if (node.left) {
        nodeQueue.push(node.left);
        pathQueue.push(path + "->" + node.left.val);
      }
      if (node.right) {
        nodeQueue.push(node.right);
        pathQueue.push(path + "->" + node.right.val);
      }
    }
  }
  return paths;
};
