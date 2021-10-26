function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reverseBetween = function (head, left, right) {
  const dummyNode = new ListNode()

  dummyNode.next = head
  let pre = dummyNode
  for(let i = 0; i < left - 1; i ++) {
    pre = pre.next
  }
  let rightNode = pre
  for(let i = 0; i < right - left + 1; i ++) {
    rightNode = rightNode.next
  }

  let leftNode = pre.next
  let curr = rightNode.next

  reverseLinkedList(leftNode)

  pre.next = rightNode

  leftNode.next = curr
  return dummyNode.next

  function reverseLinkedList(head) {
    let pre = null
    let cur = head
    while(cur) {
      const next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }
  }
};


var reverseBetween = function(head, left, right) {
  let dummyNode = new ListNode()
  dummyNode.next = head
  let pre = dummyNode

  for(let i = 0; i < left - 1; ++ i) {
    pre = pre.next
  }

  let cur = pre.next

  for(let i = 0; i < right - left + 1; i ++) {
    const next = cur.next
    cur.next = next.next
    next.next = pre.next
    pre.next = next
  }

  return dummyNode.next

};

// 递归

let i = 0
var reverseBetween = function (head, left, right) {
  i ++
  if (i === right) return head

  if (i < left) {
    head.next = reverseBetween(head.next, left, right)
    return head
  } else {
    let node = reverseBetween(head.next, left)
    let nex = head.next.next
    head.next.next = head
    head.next = nex
    return node
  }
}
