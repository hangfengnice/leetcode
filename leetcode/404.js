var sumOfLeftLeaves = function (root) {
  if (!root) return 0;
  let sum = 0;
  let queue = [root];

  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.pop();

      if (node.left) {
        if (!node.left.left && !node.left.right) {
          sum += node.left.val;
        } else {
          queue.unshift(node.left);
        }
      }

      if (node.right) {
        queue.unshift(node.right);
      }
    }
  }
  return sum;
};

var sumOfLeftLeaves = function (root) {
  return root ? dfs(root) : 0;
  function dfs(root) {
    let ans = 0;
    if (root.left) {
      ans += isLeaf(root.left) ? root.left.val : dfs(root.left);
    }
    if (root.right) {
      ans += dfs(root.right);
    }
    return ans;
  }

  function isLeaf(root) {
    return !root.left && !root.right;
  }
};
