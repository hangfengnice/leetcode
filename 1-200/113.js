var pathSum = function (root, targetSum) {
  let paths = [];
  let path = [];
  dfs(root, targetSum);
  return paths;
  function dfs(root, sum) {
    if (!root) return;

    path.push(root.val);

    if (!root.left && !root.right && root.val == sum) {
      paths.push(path.slice());
    }
    dfs(root.right, sum - root.val);
    dfs(root.left, sum - root.val);

    path.pop();
  }
};

var pathSum = function (root, targetSum) {
  if (!root) return [];
  let res = [];

  let queue = [[root, root.val]];
  let paths = [[root.val]];

  while (queue.length) {
    let [node, val] = queue.pop();
    let path = paths.pop();
    if (val == targetSum && !node.left && !node.right) {
      res.push([...path]);
      continue;
    }
    if (node.left) {
      queue.unshift([node.left, val + node.left.val]);
      paths.unshift([...path, node.left.val]);
    }
    if (node.right) {
      queue.unshift([node.right, val + node.right.val]);
      paths.unshift([...path, node.right.val]);
    }
  }
  return res;
};
