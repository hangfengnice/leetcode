var findDisappearedNumbers = function (nums) {
  let n = nums.length;
  for (let num of nums) {
    const x = (num - 1) % n;
    nums[x] += n;
  }

  const ret = [];

  for (const [i, num] of nums.entries()) {
    if (num <= n) {
      ret.push(i + 1);
    }
  }

  return ret;
};

let res = findDisappearedNumbers([4,3,2,7,8,2,3,1])

console.log(res)
