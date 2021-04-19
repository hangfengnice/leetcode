var maxArea = function (height) {
  let len = height.length;
  let l = 0,
    r = len - 1;

  let max = 0;

  while (l < r) {
    let minHeight, maxHeight;
    if (height[l] > height[r]) {
      minHeight = height[r];
      maxHeight = height[l];
      r--;
    } else {
      minHeight = height[l];
      maxHeight = height[r];
      l++;
    }
    max = Math.max((r - l + 1) * minHeight, max);
  }

  return max;
};
