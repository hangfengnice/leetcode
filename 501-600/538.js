var convertBST = function (root) {
  let sum = 0
  let node = root
  while(node) {
    if (node.right === null) {
      sum += node.val
      node.val = sum
      node = node.left
    } else {
      let succ = getSuccessor(node)

      if (succ.)
    }
  }

  return root
};
