var searchRange = function (nums, target) {
  if (nums.indexOf(target) > -1) {
    return [nums.indexOf(target), nums.lastIndexOf(target)];
  }
  return [-1, -1];
};
