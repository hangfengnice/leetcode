var containsNearbyAlmostDuplicate = function (nums, k, t) {
  let s = new Set();
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    let res = [...s].some((item) => {
      return Math.abs(item - val) <= t;
    });
    if (res) {
      return true;
    } else {
      s.add(val);
    }
    if (s.size > k) {
      s.delete(nums[i - k]);
    }
  }
  return false;
};

var containsNearbyAlmostDuplicate = function (nums, k, t) {
  var s = new Set();

  for (var i = 0; i < nums.length; i++) {
    //针对|num[i]-num[j]|<=t的代码
    console.log(s, "s");
    var res = [...s]
      .filter((v) => {
        return v >= nums[i] - t;
      })
      .some((v) => {
        return v <= nums[i] + t;
      });

    console.log(res);
    if (res) {
      return true;
    } else {
      s.add(nums[i]);
    }

    // 针对滑动窗口的位置必须固定的代码
    if (s.size == k + 1) {
      s.delete(nums[i - k]);
    }
  }
  return false;
};

let res = containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0);
// console.log(res)
