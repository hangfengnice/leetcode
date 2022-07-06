var largestRectangleArea = function (heights) {
  const n = heights.length;
  let ans = 0;

  for (let left = 0; left < n; left++) {
    let minHeight = Infinity;

    for (let right = left; right < n; right++) {
      minHeight = Math.min(minHeight, heights[right]);
      ans = Math.max(ans, (right - left + 1) * minHeight);
    }
  }
  return ans;
};

var largestRectangleArea = function (heights) {
  let n = heights.length;
  let left = [],
    right = [];
  let stack = [];
  for (let i = 0; i < n; i++) {
    while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop();
    }
    left[i] = !stack.length ? -1 : stack[stack.length - 1];
    stack.push(i);
  }

  stack = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop();
    }
    right[i] = !stack.length ? n : stack[stack.length - 1];
    stack.push(i);
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, (right[i] - left[i] - 1) * heights[i]);
  }
  return ans;
};
