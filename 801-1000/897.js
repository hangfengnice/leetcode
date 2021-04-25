var increasingBST = function (root) {
  const res = [];
  inorder(root, res);
  const dummy = new TreeNode();
  let current = dummy;

  for (let value of res) {
    current.right = new TreeNode(value);
    current = current.right;
  }
  return dummy.right;

  function inorder(root, res) {
    if (!root) {
      return;
    }
    inorder(root.left, res);
    res.push(root.val);
    inorder(root.right, res);
  }
};

var increasingBST = function (root) {
  const dummy = new TreeNode();
  let resNode = dummy;

  inorder(root);

  return dummy.right;

  function inorder(node) {
    if (!node) {
      return;
    }

    inorder(node.left);

    resNode.right = node;

    node.left = null;
    resNode = node;
    inorder(node.right);
  }
};
