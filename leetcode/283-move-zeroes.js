var moveZeroes = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      if (k != i) {
        let temp = nums[i];
        nums[i] = nums[k];
        nums[k] = temp;
      }
      k++;
    }
  }
};
