var majorityElement = function (nums) {
  let candidate = -1;
  let count = 0;
  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }
  count = 0;
  let length = nums.length;
  for (const num of nums) {
    if (num === candidate) {
      count++;
    }
  }
  return count * 2 > length ? candidate : -1;
};
