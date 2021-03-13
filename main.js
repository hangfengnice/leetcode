const sortedArrayToBST = function (nums) {
  if(!nums.length) return null

  const root = build(0, nums.length - 1)

  return root

  function build(low, high) {
    if (low > high) {
      return null
    }

    let mid = Math.floor(low + (high - low) / 2)

  }
}

