var xorOperation = function(n, start) {
  let nums = []
  for(let i = 0; i < n; i ++) {
    nums[i] = start + 2 * i
  }
  return nums.reduce((a, b) => a ^ b, 0)
};


let res = xorOperation(5, 0)

console.log(res);
