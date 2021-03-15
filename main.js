const trap = function (height) {
  debugger
  let leftCur = 0;

  let rightCur = height.length - 1;

  let res = 0;
  let leftMax = 0;
  let rightMax = 0;

  while (leftCur < rightCur) {
    const left = height[leftCur];
    const right = height[rightCur];

    if (left < right) {
      leftMax = Math.max(left, leftMax);

      res += leftMax - left;
      leftCur++;
    } else {
      rightMax = Math.max(right, rightMax);
      res += rightMax - right;
      rightCur--;
    }
  }
  return res;
};

trap([0,1,0,2,1,0,1,3,2,1,2,1])
