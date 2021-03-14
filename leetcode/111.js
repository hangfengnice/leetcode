var minDepth = function (root) {
  if (!root) return 0;
  else if (!root.left) {
    return minDepth(root.right) + 1;
  } else if (!root.right) {
    return minDepth(root.left) + 1;
  } else {
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  }
};

var minDepth = function (root) {
  if (!root) return 0;
  let queue = [root];

  let level = 1;

  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.pop();

      if (!node.left && !node.right) {
        return level;
      }

      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
    }
    level++;
  }
};
