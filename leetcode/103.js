var zigzagLevelOrder = function (root) {
  let res = [];
  if (!root) return res;
  let stack = [root];
  let order = true;
  while (stack.length) {
    let len = stack.length;
    let arr = [];
    for (let i = 0; i < len; i++) {
      let node = stack.pop();

      if (order) {
        arr.push(node.val);
      } else {
        arr.unshift(node.val);
      }

      if (node.left) {
        stack.unshift(node.left);
      }

      if (node.right) {
        stack.unshift(node.right);
      }
    }
    res.push(arr);
    order = !order;
  }
  return res;
};
