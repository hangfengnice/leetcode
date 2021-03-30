var moveZeroes = function (nums) {
  let slow = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!!nums[i]) {
      if (slow != i) {
        let temp = nums[i];
        nums[i] = nums[slow];
        nums[slow] = temp;
      }
      slow++;
    }
  }
};

let arr = [1, 3, 5, 0, 4];

let res = moveZeroes(arr);

console.log(arr);
