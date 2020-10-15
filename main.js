var checkPossibility = function (nums) {
  let len = nums.length;
  for (let i = len - 1; i > 0; i--) {
    let count = 0,
      j = i;
    while (j > 0) {
      if (nums[i] < nums[j - 1]) {
        count++;
      }
      if (count == 2) return false;
      j--;
    }
  }
  return true;
};

let result = checkPossibility([3,4,2,3])

console.log(result);
