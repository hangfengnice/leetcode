var best = function (prices) {
  let len = prices.length;
  if (len < 2) return 0;
  let precash = 0;
  let prehold = -prices[0];
  for (let i = 0; i < len; i++) {
    let cash = Math.max(precash, prehold + prices[i]);
    let hold = Math.max(prehold, precash - prices[i]);
    precash = cash;
    prehold = hold;
  }
  return precash;
};
let res = best([7,1,5,3,6,4])

console.log(res);
