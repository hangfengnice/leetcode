var findBottomLeftValue = function (root) {
  let ret = 0;
  let queue = [root];
  while (queue.length) {
    const p = queue.shift();
    if (p.right) {
      queue.push(p.right);
    }
    if (p.left) {
      queue.push(p.left);
    }
    ret = p.val;
  }
  return ret;
};

var findBottomLeftValue = function (root) {
  let ret,
    max = 0;
  dfs(root, 1);
  return ret;

  function dfs(node, depth) {
    if (!node) return;
    if (depth > max) {
      max = depth;

      ret = node.val;
    }

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }
};
