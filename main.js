var findErrorNums = function (nums) {
  debugger
  let dup = -1, missing = 1
  for(let num of nums) {
    if (nums[Math.abs(num) - 1] < 0) {
      dup = Math.abs(num)
    } else {
      nums[Math.abs(num) - 1] *= -1
    }
  }

  for(let i = 1; i < nums.length; i ++) {
    if (nums[i] > 0) {
      missing = i + 1
    }
  }
  return [dup, missing]
};

let res = findErrorNums([1, 1])

console.log(res, 'res');
