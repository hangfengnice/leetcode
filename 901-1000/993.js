var isCousins = function (root, x, y) {
  let x_parent = null,
    x_depth = null,
    x_found = null;
  let y_parent = null,
    y_depth = null,
    y_found = null;

  dfs(root, 0, null);

  return x_parent !== y_parent && x_depth === y_depth;

  function dfs(node, depth, parent) {
    if (!node) {
      return;
    }
    if (node.val === x) {
      [x_parent, x_depth, x_found] = [parent, depth, true];
    } else if (node.val === y) {
      [y_parent, y_depth, y_found] = [parent, depth, true];
    }

    if (x_found && y_found) return;

    dfs(node.left, depth + 1, node);

    if (x_found && y_found) return;
    dfs(node.right, depth + 1, node);
  }
};
