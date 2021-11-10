var getMaxLen = function (nums) {
  let length = nums.length;
  let positive = new Array(length).fill(0);
  let negative = new Array(length).fill(0);

  if (nums[0] > 0) {
    positive[0] = 1;
  } else {
    negative[0] = 1;
  }

  let maxLength = positive[0];

  for (let i = 1; i < length; i++) {
    if (nums[i] > 0) {
      positive[i] = positive[i - 1] + 1;
      negative[i] = negative[i - 1] > 0 ? negative[i - 1] + 1 : 0;
    } else if (nums[i] < 0) {
      positive[i] = negative[i - 1] > 0 ? negative[i - 1] + 1 : 0;
      negative[i] = positive[i - 1] + 1;
    } else {
      positive[i] = negative[i] = 0;
    }
    maxLength = Math.max(maxLength, positive[i]);
  }
  return maxLength;
};
