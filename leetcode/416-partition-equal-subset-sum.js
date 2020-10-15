// 暴力 超时
var canPartition = function (nums) {
  let sum = 0
  for(let num of nums) {
    sum += num
  }
  if (sum % 2) return false
  let len = nums.length
  return tryPartition(len - 1, sum / 2)

  function tryPartition (index, sum) {
    if (!sum) return true
    if (sum < 0 || index < 0) return false
    return tryPartition(index - 1, sum) || tryPartition(index - 1, sum - nums[index])
  }
}

// 暴力 递归 备忘录 还是超了
var canPartition = function (nums) {
  let sum = 0
  for(let num of nums) {
    sum += num
  }
  if (sum % 2) return false
  let len = nums.length, meno = Array.from(Array(len), () => ({}))
  console.log(meno);
  return tryPartition(len - 1, sum / 2)

  function tryPartition (index, sum) {
    if (!sum) return true
    if (sum < 0 || index < 0) return false
    if (meno[index][sum]) {
      return meno[index][sum]
    }
    meno[index][sum] = (tryPartition(index - 1, sum) || tryPartition(index - 1, sum - nums[index])) ? true : false
    return meno[index][sum]
  }
}
var canPartition = function (nums) {
  let sum = 0
  for(let num of nums) {
    sum += num
  }
  if (sum % 2) return false

  let n = nums.length
  let C = sum / 2
  let meno = []
  for(let i = 0; i <= C; i ++) {
    meno[i] = (nums[0] == i)
  }

  for(let i = 1; i < n; i ++) {
    for(let j = C; j >= nums[i]; j --) {
      meno[j] = meno[j] || meno[j - nums[i]]
    }
  }
  return meno[C]
}

let result = canPartition([100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,99,97])

console.log(result);
