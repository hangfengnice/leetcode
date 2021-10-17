pick = function (target) {
  let n = 0,
    index = 0;
  for (let i = 0; i < this.nums.length; i++) {
    if (this.nums[i] === target) {
      n++;

      if (Math.random() < 1 / n) {
        index = i;
      }
    }
  }
  return index;
};
