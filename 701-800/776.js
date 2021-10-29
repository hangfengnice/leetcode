var splitBST = function (root, V) {
  if (root === null) {
    return [null, null];
  } else if (root.val <= V) {
    let bns = splitBST(root.right, V);
    root.right = bns[0];
    bns[0] = root;
    return bns;
  } else {
    let bns = splitBST(root.left, V);
    root.left = bns[1];
    bns[1] = root;
    return bns;
  }
};
