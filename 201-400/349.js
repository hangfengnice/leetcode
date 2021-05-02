var intersection = function (nums1, nums2) {
  let map = {},
    set = new Set();
  for (let num of nums1) {
    map[num] = true;
  }
  for (let num of nums2) {
    if (map[num]) {
      set.add(num);
    }
  }
  return [...set];
};

var intersection = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const length1 = nums1.length;
  const length2 = nums2.length;

  let index1 = 0,
    index2 = 0;
  const intersection = [];

  while (index1 < length1 && index2 < length2) {
    const num1 = nums1[index1];
    const num2 = nums2[index2];

    if (num1 == num2) {
      if (
        !intersection.length ||
        num1 != intersection[intersection.length - 1]
      ) {
        intersection.push(num1);
      }
      index1++;
      index2++;
    } else if (num1 < num2) {
      index1++;
    } else {
      index2++;
    }
  }

  return intersection;
};
