var fourSum = function (nums, target) {
  let size = nums.length,
    res = [];
  if (size < 4) return res;
  nums.sort((a, b) => a - b);
  console.log(nums, "nums");

  for (let a = 0; a < size - 3; a++) {
    if (a > 0 && nums[a] == nums[a - 1]) continue;

    for (b = a + 1; b < size - 2; b++) {
      if (b > a + 1 && nums[b] == nums[b - 1]) continue;

      let c = b + 1;
      let d = size - 1;
      console.log(c, d);

      while (c < d) {
        if (nums[a] + nums[b] + nums[c] + nums[d] > target) {
          d--;
        } else if (nums[a] + nums[b] + nums[c] + nums[d] < target) {
          c++;
        } else {
          res.push([nums[a], nums[b], nums[c], nums[d]]);
          while (c < d && nums[c + 1] == nums[c ]) {
            c++;
          }
          while (c < d && nums[d + 1] == nums[d ]) {
            d--;
          }
          c++;
          d--;
        }
      }
    }
  }
  return res;
};

let arr = [-3, -2, -1, 0, 0, 1, 2, 3];
let res = fourSum(arr, 0);

console.log(res);
