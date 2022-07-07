var evaluate = function (expression) {
  const scope = new Map()
  let start = 0
  return innerEvaluate(expression)

  function innerEvaluate(expression) {
    if (expression[start] !== '(') {
      if (isLowerCase(expression[start])) {
        const v = parseVar(expression)
        const n = scope.get(v).length
        return scope.get(v)[n - 1]
      }
    }
  }
  function isLowerCase(ch) {
    return ch >= 'a' && ch <= 'z'
  }
}
