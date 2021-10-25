var majorityElement = function (nums) {
  let element = null,
    count = 0;
  for (let num of nums) {
    if (count === 0) {
      element = num;
      count++;
    } else {
      if (num === element) {
        count++;
      } else {
        count--;
      }
    }
  }
  return element;
};
