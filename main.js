var isValid = function (s) {
  let map = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  let stack = []

  for (let ch of s) {
    debugger
    let top = stack[stack.length - 1]

    if (top && map[ch] == top) {
      stack.pop()
    } else {
      stack.push(ch)
    }
  }

  console.log(stack, 'stack')
  return stack.length == 0
}

isValid('()')
