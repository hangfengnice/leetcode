var buildTree = function (inorder, postorder) {
  let map = {};
  let length = inorder.length;
  let postIdx = length - 1;
  for (let i = 0; i < length; i++) {
    map[inorder[i]] = i;
  }
  return dfs(0, length - 1);
  function dfs(iS, iD) {
    if (iS > iD) return null;
    let rootVal = postorder[postIdx];

    let mid = map[rootVal];

    let root = new TreeNode(rootVal);

    postIdx--;

    root.right = dfs(mid + 1, iD);
    root.left = dfs(iS, mid - 1);

    return root;
  }
};
