var nextPermutation = function (nums) {
  let i = nums.length - 2
  while(i >= 0 && nums[i] >= nums[i + 1]) {
    i --
  }
  if (i >= 0) {
    let j = nums.length - 1
    while(j >= 0 && nums[i] >= nums[j]) {
      j --
    }
    swap(nums, i, j)
  }
  reverse(nums, i + 1)
  return nums
  function swap(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
  function reverse(nums, start) {
    let left = start, right = nums.length - 1
    while(left < right) {
      swap(nums, left, right)
      left ++
      right --
    }
  }
}

let res = nextPermutation([1, 5, 1])

console.log(res);
