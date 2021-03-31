// var subsetsWithDup = function (nums) {

// };


var subsetsWithDup = function (nums) {
  let res = []
  dfs([], 0)
  return res
  function dfs(sub, start) {
      res.push(sub.slice())
      for(let i = start; i < nums.length; i ++) {
        if (i > start && nums[i] == nums[i - 1]) continue
          sub.push(nums[i])
          dfs(sub, i + 1)
          sub.pop()
      }
  }
};

let res = subsetsWithDup([1,2,2])

console.log(res, 'res');
