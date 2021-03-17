// var subsetsWithDup = function (nums) {
//   nums.sort((a, b) => a - b);

//   let res = [];
//   dfs([], 0);
//   return res;
//   function dfs(temp, start) {
//     res.push(temp.slice());

//     for (let i = start; i < nums.length; i++) {
//       if (i > start && nums[i] == nums[i - 1]) continue;
//       temp.push(nums[i]);
//       dfs(temp, i + 1);
//       temp.pop();
//     }
//   }
// };

// 迭代
var subsetsWithDup = function (nums) {
  let ans = [[]]
  nums.sort((a, b) => a - b)
  let start = 1

  for(let i = 0; i < nums.length; i ++) {
    let temp = []
    for(let j = 0; j < ans.length; j ++) {
      let list = ans[j]
      if (i > 0 && nums[i] == nums[i - 1] && j < start) {
        continue
      }
    }
  }
}
