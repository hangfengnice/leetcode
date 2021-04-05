var lowestCommonAncestor = function (root, p, q) {
  let parent = new Map();
  let visited = new Set();
  dfs(root);

  while (!!p) {
    visited.add(p.val);
    p = parent.get(p.val);
  }
  while (!!q) {
    if (visited.has(q.val)) {
      return q;
    }
    q = parent.get(q.val);
  }
  return null;

  function dfs(root) {
    if (!!root.left) {
      parent.set(root.left.val, root);
      dfs(root.left);
    }
    if (!!root.right) {
      parent.set(root.right.val, root);
      dfs(root.right);
    }
  }
};
