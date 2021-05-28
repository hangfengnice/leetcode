var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) return root.val == targetSum;

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

var hasPathSum = function (root, targetSum) {
  if (!root) return false
  let queue = [[root, root.val]];

  while (queue.length) {
    let [node, val] = queue.pop();

    if (val == targetSum && !node.left && !node.right) return true;

    if (node.left) {
      queue.unshift([node.left, node.left.val + val]);
    }

    if (node.left) {
      queue.unshift([node.right, node.right.val + val]);
    }
  }
  return false;
};
