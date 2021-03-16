const trap = function (height) {
  let leftCur = 0
  let rightCur = height.length - 1

  let res = 0
  let leftMax = 0
  let rightMax = 0

  while(leftCur < rightCur) {
    const left = height[leftCur]
    const right = height[rightCur]

    if (left < rihgt) {
      leftMax = Math.max(left, leftMax)

      res += leftMax - left

      leftCur ++
    } else {
      rightMax = Math.max(rihgt, rightMax)

      res += rightMax - right

      rightCur --
    }
  }
}

const reverseKGroup = function (head, k) {
  let dummy = new ListNode()

  dummy.next = head

  let pre = dummy

  let start = head
  let end = head

  let next = head

  while(next) {
    for(let i = 1; i < k && end; i ++) {
      end = end.next
    }
    if (!end) {
      break
    }

    next = end.next

    end.next = null

    end = start

    start = reverse(start)



  }

  return dummy.next
}
