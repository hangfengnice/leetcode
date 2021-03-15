const buildTree = function (preorder, inorder) {
  const len = preorder.length;
  return build(0, len - 1, 0, len - 1);

  function build(preL, preR, inL, inR) {
    if (preL > preR) return null;

    const root = new TreeNode();

    root.val = preorder(preL);

    const k = inorder.indexOf(root.val);
    const numLeft = k - inL;
    root.left = build(preL + 1, preL + numLeft, inL, k - 1);
    root.right = build(preL + numLeft + 1, preR, k + 1, inR);

    return root;
  }
};
