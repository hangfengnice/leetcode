var preorder = function (root) {
  if (!root) return [];
  let res = [];

  dfs(root);

  return res;

  function dfs(root) {
    if (!root) return;
    res.push(root.val);
    for (let c of root.children) {
      dfs(c);
    }
  }
};
