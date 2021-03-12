let arr = [1, 2, 3];

const permute = function (nums) {
  const res = []
  const len = nums.length

  const sub = []

  dfs(0)
  return res

  function dfs(index) {
    res.push(sub.slice())

    for(let i = index; i < len; i ++) {
      sub.push(nums[i])
      dfs(i + 1)
      sub.pop()
    }
  }
};

let res = permute(arr)

console.log(res);
