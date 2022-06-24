var largestValues = function (root) {
  let res = [];
  let queue = [root];

  while (queue.length) {
    let len = queue.length;
    let max = 0;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.val > max) {
        max = node.val;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(max);
  }
  return res;
};
