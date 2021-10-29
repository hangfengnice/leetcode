var verifyPreorder = function (preorder) {
  let stack = [];
  let curMax = -Infinity;

  for (let n of preorder) {
    while (stack.length && n > stack[stack.length - 1]) {
      curMax = stack.pop();
    }
    if (n < curMax) return false;
    stack.push(n);
  }
  return true;
};
