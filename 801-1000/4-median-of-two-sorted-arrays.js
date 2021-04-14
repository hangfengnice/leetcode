// 合并数组
var findMedianSortedArrays = function (nums1, nums2) {
  const merged = merge(nums1, nums2);
  const len = merged.length;

  return len % 2
    ? merged[(len - 1) / 2]
    : (merged[len / 2] + merged[len / 2 - 1]) / 2;

  function merge(l, r) {
    const len1 = l.length;
    const len2 = r.length;
    const merged = Array(len1 + len2);
    let i = 0,
      j = 0,
      k = 0;

    while (i < len1 && j < len2) merged[k++] = l[i] < r[j] ? l[i++] : r[j++];
    while (i < len1) {
      merged[k++] = l[i++];
    }
    while (j < len2) {
      merged[k++] = r[j++];
    }
    return merged;
  }
};

let res = findMedianSortedArrays([1, 3], [2]);

console.log(res);
