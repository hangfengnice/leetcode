var findKthLargest = function (nums, k) {
  let n = nums.length;
  nums.sort((a, b) => a - b);
  return nums[n - k];
};

// partition
var findKthLargest = function (nums, k) {
  let len = nums.length;
  let l = 0,
    r = len - 1;
  let target = len - k;
  while (true) {
    let index = partition(nums, l, r);
    if (index == target) {
      return nums[index];
    } else if (index < target) {
      l = index + 1;
    } else {
      r = index - 1;
    }
  }
  function partition(nums, l, r) {
    let pivot = nums[l];
    let j = l;
    for (let i = l + 1; i <= r; i++) {
      if (nums[i] < pivot) {
        j++;
        if (j != i) [nums[j], nums[i]] = [nums[i], nums[j]];
      }
    }
    [nums[j], nums[l]] = [nums[l], nums[j]];
    return j;
  }
};

// partition 优化
var findKthLargest = function (nums, k) {
  let len = nums.length;
  let l = 0,
    r = len - 1;
  let target = len - k;
  while (true) {
    let index = partition(nums, l, r);
    if (index == target) {
      return nums[index];
    } else if (index < target) {
      l = index + 1;
    } else {
      r = index - 1;
    }
  }
  function partition(nums, l, r) {
    let randomIndex = ~~(Math.random(r - l + 1) + l);
    [nums[l], nums[randomIndex]] = [nums[randomIndex], nums[l]];
    let pivot = nums[l];
    let j = l;
    for (let i = l + 1; i <= r; i++) {
      if (nums[i] < pivot) {
        j++;
        if (j != i) [nums[j], nums[i]] = [nums[i], nums[j]];
      }
    }
    [nums[j], nums[l]] = [nums[l], nums[j]];
    return j;
  }
};

// 双指针
var findKthLargest = function (nums, k) {
  let len = nums.length;
  let l = 0,
    r = len - 1;
  let target = len - k;
  while (true) {
    let index = partition(nums, l, r);
    if (index == target) {
      return nums[index];
    } else if (index < target) {
      l = index + 1;
    } else {
      r = index - 1;
    }
  }
  function partition(nums, l, r) {
    let randomIndex = ~~(Math.random(r - l + 1) + l);
    [nums[l], nums[randomIndex]] = [nums[randomIndex], nums[l]];
    let pivot = nums[l];
    let lt = l + 1;
    let rt = r;

    while (true) {
      while (lt <= rt && nums[lt] < pivot) {
        lt++;
      }
      while (lt <= rt && nums[rt] > pivot) {
        rt--;
      }
      if (lt > rt) break;
      [nums[lt], nums[rt]] = [nums[rt], nums[lt]];
      lt++;
      rt--;
    }
    [nums[l], nums[rt]] = [nums[rt], nums[l]];
    return rt;
  }
};

// 最大堆 最小队

let result = findKthLargest([3, 2, 1, 5, 6, 4], 2);

console.log(result);

// var findKthLargest = function (nums, k) {};
