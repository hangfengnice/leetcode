var firstMissingPositive = function(nums) {
  let s = new Set(nums), i
  for(i = 1; i <= nums.length; i ++) {
    if (!s.has(i)) return i
  }
  return i
};

let res = firstMissingPositive([1, 2])

console.log(res, 'res')
