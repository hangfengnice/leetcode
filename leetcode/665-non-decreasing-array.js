var checkPossibility = function (nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      count++;
      if (count == 2) return false;
      if (i - 2 >= 0 && nums[i - 2] > nums[i]) {
        nums[i] = nums[i - 1];
      } else {
        nums[i - 1] = nums[i];
      }
    }
  }
  return true;
};

var checkPossibility = function (nums) {
  let count = 0;
  if (nums[0] > nums[1]) count++;
  for (let i = 1; i < nums.length - 1; i++) {
    let l = nums[i - 1],
      r = nums[i + 1];
    if (nums[i] > nums[i + 1]) {
      count++;
      if (count == 2) return false;
      if (l > r) {
        nums[i + 1] = nums[i];
      } else {
        nums[i] = r;
      }
    }
  }
  return true;
};

let res = checkPossibility([3, 4, 2, 3]);

console.log(res);
