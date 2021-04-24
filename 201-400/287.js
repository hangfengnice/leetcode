var findDuplicate = function (nums) {
  let len = nums.length;
  let left = 1;
  let right = len - 1;

  while (left < right) {
    let mid = (left + right) >> 1;
    let cnt = 0;

    for (let num of nums) {
      if (num <= mid) {
        cnt++;
      }
    }

    if (cnt > mid) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
