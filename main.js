var trap = function (height) {
  let ans = 0;
  let stack = [];
  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      let top = stack.pop();
      if (!stack.length) break;

      let width = i - stack[stack.length - 1] - 1;
      let height =
        Math.min(height[i], height[stack[stack.length - 1]]) - height[top];
      ans += width * height;
    }
    stack.push(i);
  }
  return ans;
};
