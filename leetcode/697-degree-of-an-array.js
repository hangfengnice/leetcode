var findShortestSubArray = function (nums) {
  let map = {};
  let times = 0;
  let minlen = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!map[num]) {
      map[num] = [1, i, i];
    } else {
      map[num][0]++;
      map[num][2] = i;
      if (map[num][0] > times) {
        times = map[num][0];
        minlen = map[num][2] - map[num][1];
      } else if (map[num][0] == times) {
        minlen = Math.min(minlen, map[num][2] - map[num][1]);
      }
    }
  }
  return minlen + 1;
};
