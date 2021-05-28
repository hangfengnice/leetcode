var mergeTrees = function (root1, root2) {
  if (!root1) {
    return root2;
  }
  if (!root2) {
    return root1;
  }

  let merged = new TreeNode(root1.val + root2.val);

  merged.left = mergeTrees(root1.left, root2.left);
  merged.right = mergeTrees(root1.right, root2.right);

  return merged;
};

var mergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;

  let merged = new TreeNode(root1.val + root2.val);

  let q = [merged];
  let queue1 = [root1];
  let queue2 = [root2];

  while (queue1.length && queue2.length) {
    let node = q.shift();
    let node1 = queue1.shift();
    let node2 = queue2.shift();

    let left1 = node1.left;
    let right1 = node1.right;

    let left2 = node2.left;
    let right2 = node2.right;

    if (left1 || left2) {
      if (left1 && left2) {
        let left = new TreeNode(left1.val + left2.val);

        node.left = left;
        q.push(left);
        queue1.push(left1);
        queue2.push(left2);
      } else if (left1) {
        node.left = left1;
      } else if (left2) {
        node.left = left2;
      }
    }

    if (right1 || right2) {
      if (right1 && right2) {
        let right = new TreeNode(right1.val + right2.val);

        node.right = right;
        q.push(right);
        queue1.push(right1);
        queue2.push(right2);
      } else if (right1) {
        node.right = right1;
      } else if (right2) {
        node.right = right2;
      }
    }
  }

  return merged;
};
