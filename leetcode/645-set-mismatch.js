// 暴力
var findErrorNums = function (nums) {
  let dup = -1,
    missing = -1;
  for (let i = 1; i <= nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] == i) {
        count++;
      }
    }
    if (count == 2) {
      dup = i;
    } else if (!count) {
      missing = i;
    }
  }
  return [dup, missing];
};

// 暴力 提前推出
var findErrorNums = function (nums) {
  let dup = -1,
    missing = -1;
  for (let i = 1; i <= nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] == i) {
        count++;
      }
    }
    if (count == 2) {
      dup = i;
    } else if (!count) {
      missing = i;
    }
    if (count > -1 && missing > -1) return [dup, missing];
  }
};

// 排序
var findErrorNums = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let dup = -1,
    missing = 1,
    len = nums.length;
  for (let i = 1; i <= len; i++) {
    if (nums[i] == nums[i - 1]) {
      dup = nums[i];
    } else if (nums[i] > nums[i - 1] + 1) {
      missing = nums[i - 1] + 1;
    }
  }
  return [dup, nums[nums.length - 1] != nums.length ? nums.length : missing];
};

// map
var findErrorNums = function (nums) {
  let map = {},
    dup = -1,
    missing = 1;
  for (let num of nums) {
    map[num] != undefined ? map[num]++ : (map[num] = 1);
  }
  for (let i = 1; i <= nums.length; i++) {
    if (map[i] != undefined) {
      if (map[i] == 2) dup = i;
    } else {
      missing = i;
    }
  }
  return [dup, missing];
};

// 额外数组
var findErrorNums = function (nums) {
  let n = nums.length;
  let arr = Array(n).fill(0);
  let dup = -1,
    missing = 1;
  for (let num of nums) {
    arr[num]++;
  }
  for (let i = 1; i < n; i++) {
    if (!arr[i]) {
      missing = i;
    } else if (arr[i] == 2) {
      dup = i;
    }
  }
  return [dup, missing];
};

// 使用额外空间 负的数字
var findErrorNums = function (nums) {
  let dup = -1,
    missing = 1;
  for (let num of nums) {
    let abs = Math.abs(num);
    if (nums[abs - 1] < 0) {
      dup = abs;
    } else {
      nums[abs - 1] *= -1;
    }
  }
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) missing = i + 1;
  }
  return [dup, missing];
};

// 位运算
var findErrorNums = function (nums) {
  let n = nums.length;
  let sum = 0,
    xor1 = 0,
    xor0 = 0;
  let dup = -1,
    miss = 1;
  for (let i = 1; i <= n; i++) {
    sum ^= i;
  }
  for (let num of nums) {
    sum ^= num;
  }
  let t = sum & ~(sum - 1);

  for (let num of nums) {
    if (t & num) {
      xor1 ^= num;
    } else {
      xor0 ^= num;
    }
  }
  for (let i = 1; i <= n; i++) {
    if (t & i) {
      xor1 ^= i;
    } else {
      xor0 ^= i;
    }
  }

  for (let num of nums) {
    if (num == xor0) {
      return [xor0, xor1];
    }
  }
  return [xor1, xor0];
};

let result = findErrorNums([1, 2, 2, 4]);

console.log(result);
