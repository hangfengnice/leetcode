var dailyTemperatures = function (temperatures) {
  let length = temperatures.length;
  let stack = [];
  let ans = new Array(length).fill(-1);
  for (let i = 0; i < length; i++) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      let last = stack.pop();
      ans[last] = i - last;
    }
    stack.push(i);
  }
  return ans;
};
