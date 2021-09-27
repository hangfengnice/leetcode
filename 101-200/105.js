var buildTree = function (preorder, inorder) {
  let n = preorder.length,
    indexMap = {};

  for (let i = 0; i < n; i++) {
    indexMap[inorder[i]] = i;
  }

  return myBuildTree(preorder, inorder, 0, n - 1, 0, n - 1);

  function myBuildTree(
    preorder,
    inorder,
    preorder_left,
    preorder_right,
    inorder_left,
    inorder_right
  ) {
    if (preorder_left > preorder_right) return null;

    let preorder_root = preorder_left;
    let inorder_root = indexMap[preorder[preorder_root]];

    let root = new TreeNode(preorder[preorder_root]);

    let size_left_subtree = inorder_root - inorder_left;

    root.left = myBuildTree(
      preorder,
      inorder,
      preorder_left + 1,
      preorder_left + size_left_subtree,
      inorder_left,
      inorder_root - 1
    );
    root.right = myBuildTree(
      preorder,
      inorder,
      preorder_left + size_left_subtree + 1,
      preorder_right,
      inorder_root + 1,
      inorder_right
    );

    return root;
  }
};

// 迭代的解法
function buildTree(preorder, inorder) {
  if (preorder === null || !preorder) return null;

  let root = new TreeNode(preorder[0]);
  let stack = [root];

  let inorderIndex = 0;

  // preorder = [3, 9, 8, 5, 4, 10, 20, 15, 7];
  // inorder = [4, 5, 8, 10, 9, 3, 15, 20, 7];

  for (let i = 1; i < preorder.length; i++) {
    let preorderVal = preorder[i];

    let node = stack[stack.length - 1];

    if (node.val !== inorder[inorderIndex]) {
      node.left = new TreeNode(preorderVal);
      stack.push(node.left);
    } else {
      while (
        stack.length &&
        stack[stack.length - 1].val === inorder[inorderIndex]
      ) {
        node = stack.pop();
        inorderIndex++;
      }
      node.right = new TreeNode(preorderVal);

      stack.push(node.right);
    }
  }
  return root;
}
