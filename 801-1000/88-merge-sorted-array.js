var merge = function (nums1, m, nums2, n) {
  let k = m + n - 1;
  let i = m - 1,
    j = n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] <= nums2[j]) {
      nums1[k] = nums2[j];
      j--;
    } else {
      nums1[k] = nums1[i];
      i--;
    }
    k--;
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
  return nums1;
};
let res = merge([1, 4, 5], 3, [2, 4], 2);

console.log(res);
