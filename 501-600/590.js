var postorder = function (root) {
  if (!root) return [];
  let res = [];

  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    res.unshift(node.val);
    for (let c of node.children) {
      stack.push(c);
    }
  }
  return res;
};
