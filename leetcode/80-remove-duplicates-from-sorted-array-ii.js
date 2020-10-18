var removeDuplicates = function (nums) {
  let i = 1,
    count = 1,
    n = nums.length;
  while (i < n) {
    if (nums[i] == nums[i - 1]) {
      count++;
      if (count > 2) {
        nums.splice(i, 1);
        i--;
        n--;
      }
    } else {
      count = 1;
    }
    i++;
  }
  return n;
};

var removeDuplicates = function (nums) {
  let j = 1,
    count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      count++;
    } else {
      count = 1;
    }
    if (count <= 2) {
      nums[j++] = nums[i];
    }
  }
  return j;
};

var removeDuplicates = function (nums) {
  let n = nums.length;
  if (n < 3) return n;
  let j = 1;
  for (let i = 2; i < n; i++) {
    if (nums[i] != nums[j - 1]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};

let result = removeDuplicates([1, 1, 1, 2, 2, 3]);

console.log(result);
