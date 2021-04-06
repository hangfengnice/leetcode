var removeDuplicates = function (nums) {
  let n = nums.length;
  if (n < 3) {
    return n;
  }
  let sp = 2;
  for (let fast = 2; fast < n; fast++) {
    if (nums[sp - 2] != nums[fast]) {
      nums[sp] = nums[fast];
    }
  }
  return sp;
};
let res = removeDuplicates([0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3]);
console.log(res, "res");
