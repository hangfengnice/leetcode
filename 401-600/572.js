var isSubtree = function (s, t) {
  return dfs(s, t);

  function dfs(o, t) {
    if (!o) return false;

    return check(o, t) || dfs(o.left, t) || dfs(o.right, t);
  }

  function check(o, t) {
    if (!o && !t) {
      return true;
    }
    if (!o || !t || o.val != t.val) {
      return false;
    }

    return check(o.left, t.left) && check(o.right, t.right);
  }
};
