var buildArray = function (target, n) {
  let stack = [],
    support = [];
  for (let i = 0; i < n; i++) {
    stack.push("Push");
    support.push(i + 1);
    let length = support.length;
    if (support[length - 1] !== target[length - 1]) {
      stack.push("Pop");
      support.pop();
    }
    if (support.length === target.length) return stack;
  }
  return stack;
};
