var replaceValueInTree = function (root) {
  const q = [root]

  root.val = 0

  while (q.length) {
    const q2 = []

    let sum = 0

    for (const fa of q) {
      if (fa.left) {
        q2.push(fa.left)

        sum += fa.left.val
      }

      if (fa.right) {
        q2.push(fa.right)
        sum += fa.right.val
      }
    }

    for (const fa of q) {
      const child_sum =
        (fa.left ? fa.left.val : 0) + (fa.right ? fa.right.val : 0)

      if (fa.left) {
        fa.left.val = sum - child_sum
      }

      if (fa.right) {
        fa.right.val = sum - child_sum
      }
    }

    q.length = 0

    q.push(...q2)
  }

  return root
}
