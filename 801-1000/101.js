var isSymmetric = function (root) {
  return dfs(root, root);

  function dfs(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return p.val == q.val && dfs(q.left, p.right) && dfs(q.right, p.left);
  }
};

var isSymmetric = function (root) {
  return iterator(root, root);

  function iterator(l, r) {
    let queue = [l, r];
    while (queue.length) {
      r = queue.pop();
      l = queue.pop();

      if (!r && !l) continue;

      if (!r || !l || l.val != r.val) {
        return false;
      }

      queue.push(l.left);
      queue.push(r.right);

      queue.push(l.right);
      queue.push(r.left);
    }
    return true;
  }
};
