var wiggleSort = function (nums) {
  const arr = nums.slice();
  arr.sort((a, b) => a - b);
  const n = nums.length;
  const x = Math.floor((n + 1) / 2);
  debugger

  for (let i = 0, j = x - 1, k = n - 1; i < n; i += 2, j--, k--) {
    nums[i] = arr[j];

    if (i + 1 < n) {
      nums[i + 1] = arr[k];
    }
  }
};
wiggleSort([1,5,1,1,6,4])
