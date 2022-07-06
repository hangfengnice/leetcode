var largestRectangleArea = function (heights) {
  let n = heights.length;
  let left = [],
    right = [];
  let stack = [];
  debugger

  for (let i = 0; i < n; i++) {
    while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
      right[stack[stack.length - 1]] = i;
      stack.pop();
    }
    left[i] = !stack.length ? -1 : stack[stack.length - 1];
    stack.push(i);
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, (right[i] - left[i] - 1) * heights[i]);
  }
  return ans;
};

largestRectangleArea([6, 7, 5, 2, 4, 5, 9, 3]);
