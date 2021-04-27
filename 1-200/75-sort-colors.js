var sortColors = function (nums) {
  let n = nums.length;
  let ptr = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] == 0) {
      if (ptr != i) {
        [nums[i], nums[ptr]] = [nums[ptr], nums[i]];
      }
      ptr++;
    }
  }
  for (let i = ptr; i < n; i++) {
    if (nums[i] == 1) {
      if (ptr != i) {
        [nums[i], nums[ptr]] = [nums[ptr], nums[i]];
      }
      ptr++;
    }
  }
};

var sortColors = function (nums) {
  let n = nums.length
  let p0= 0, p1 = 0
  for(let i = 0; i < n; i ++) {
    if (nums[i] == 1) {
      [nums[i], nums[p1]] = [nums[p1], nums[i]]
      p1 ++
    } else if (!nums[i]) {
      [nums[i], nums[p0]] = [nums[p0], nums[i]]
      if (p0 < p1) {
        [nums[i], nums[p1]] = [nums[p1], nums[i]]
      }
      p0 ++
      p1 ++
    }
  }
  return nums
}

// 快排
// var sortColors = function (nums) {
//   let zero = -1, two = nums.length
//   for(let i = 0; i < two;) {
//     if (nums[i] == 1) {
//       i ++
//     } else if (!nums[i]) {
//       zero ++
//       [nums[i], nums[zero]] = [nums[zero], nums[i]]
//       i ++
//     } else if (nums[i] == 2) {
//       two --
//       [nums[i], nums[two]] = [nums[two], nums[i]]
//     }
//   }
//   return nums
// }

var sortColors = function (nums) {
  let n = nums.length
  let p0 = 0, p2 = n - 1
  for(let i = 0; i <= p2; i ++) {
    while(i <= p2 && nums[i] == 2) {
      [nums[i], nums[p2]] = [nums[p2], nums[i]]
      p2 --
    }
    if (!nums[i]) {
      [nums[i], nums[p0]] = [nums[p0], nums[i]]
      p0 ++
    }
  }
  return nums
}

let result = sortColors([2, 0, 1]);

console.log(result);
