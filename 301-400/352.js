let nums;
var SummaryRanges = function () {
  nums = new Array(10002);
};

/**
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (val) {
  if (nums[val] === undefined) {
    nums[val] = val + 1;
  }
  finds(val);
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function () {
  let ans = new Array();

  for (let i = 0; i < 10001; ) {
    if (nums[i] !== undefined) {
      let temp = [];
      temp[0] = i;
      temp[1] = finds(nums[i]) - 1;
      i = temp[1] + 1;
      ans.push(temp);
    } else {
      i++;
    }
  }
  return ans;
};

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */

function finds(x) {
  if (nums[x] === undefined) {
    return x;
  }
  nums[x] = finds(nums[x]);
  return nums[x];
}
