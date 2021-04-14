var levelOrderBottom = function (root) {
  let res = [];
  if (!root) return res;
  let stack = [root];
  while (stack.length) {
    let len = stack.length;
    let arr = [];
    for (let i = 0; i < len; i++) {
      let node = stack.pop();
      arr.push(node.val);

      if (node.left) stack.unshift(node.left);

      if (node.right) stack.unshift(node.right);
    }
    res.unshift(arr);
  }
  return res;
};
