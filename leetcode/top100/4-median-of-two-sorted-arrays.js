var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length
  let n = nums2.length
  let nums = []
  if(m == 0) {
    if (n % 2) {
      return nums2[~~(n / 2)]
    } else {
      return (nums1[(~~(n / 2) - 1)] + nums2[~~(n / 2)]) / 2
    }
  }
  if (n == 0) {
    if (n % 2) {
      return nums1[~~(n / 2)]
    } else {
      return (nums2[(~~(n / 2) - 1)] + nums2[~~(n / 2)]) / 2
    }
  }
  let count = 0
  let i = 0, j = 0
}