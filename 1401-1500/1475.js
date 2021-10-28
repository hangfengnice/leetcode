var finalPrices = function (prices) {
  let stack = [];
  let res = prices.slice();
  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[i] <= prices[stack[stack.length - 1]]) {
      res[stack[stack.length - 1]] =
        prices[stack[stack.length - 1]] - prices[i];
      stack.pop();
    }
    stack.push(i);
  }
  return res;
};
