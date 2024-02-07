var minimumSeconds = function (nums) {
  const mp = new Map()

  let n = nums.length,
    res = n

  for (let i = 0; i < n; i++) {
    if (!mp.has(nums[i])) {
      mp.set(nums[i], [])
    }

    mp.get(nums[i]).push(i)
  }

  for (const pos of mp.values()) {
    console.log(pos, 'pos')
    let mx = pos[0] + n - pos[pos.length - 1]

    console.log(mx, 'mx')

    for (let i = 1; i < pos.length; i++) {
      mx = Math.max(mx, pos[i] - pos[i - 1])
    }

    res = Math.min(res, Math.floor(mx / 2))
  }

  return res
}

console.log(minimumSeconds([1, 3, 3, 3, 5]))
