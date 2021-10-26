var nextGreaterElement = function (nums1, nums2) {
  const m = nums1.length,
    n = nums2.length;

  const res = new Array(m).fill(0);

  for (let i = 0; i < m; i++) {
    let j = 0;
    while (j < n && nums2[j] !== nums1[i]) {
      j++;
    }

    let k = j + 1;
    while (k < n && nums2[k] < nums1[i]) {
      k++;
    }
    res[i] = k < n ? nums2[k] : -1;
  }

  return res;
};

// 单调栈 + 哈希表
var nextGreaterElement = function (nums1, nums2) {
  const map = new Map();
  const stack = [];
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length && nums2[i] > stack[stack.length - 1]) {
      stack.pop();
    }
    map.set(nums2[i], stack.length ? stack[stack.length - 1] : -1);
    stack.push(num);
  }
  return new Array(nums1.length).fill(0).map((_, i) => map.get(nums1[i]) || -1);
};
