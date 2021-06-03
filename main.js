var majorityElement = function(nums) {
  let map = new Map()
  let majority = 0, cnt = 0
  for(let num of nums) {
    map[nums] = (map[nums] || 0) + 1

    if (map[nums] > cnt) {
      majority = num
      cnt = map[nums]
    }
  }

  return majority
};

let res = majorityElement([1, 2, 2])

console.log(res, 'res');
