function moveZeroes(nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      if (k != i) {
        let temp = nums[k];
        nums[k] = nums[i];
        nums[i] = temp;
      }
      k++;
    }
  }
}
