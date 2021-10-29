var parseTernary = function (expression) {
  let n = expression.length;
  let checkLevel = 0;
  for (let j = 1; j < n; j++) {
    if (expression[j] === "?") checkLevel++;
    if (expression[j] === ":") checkLevel--;
    if (checkLevel === 0) {
      return expression[0] === "T"
        ? parseTernary(expression.slice(2, j))
        : parseTernary(expression.slice(j + 1));
    }
  }
  return expression;
};

// 栈解
var parseTernary = function (expression) {
  let stack = [];
  for (let i = expression.length - 1; i >= 0; i--) {
    let ch = expression[i];
    if (ch !== "?") {
      stack.push(ch);
      continue;
    }
    let t = stack.pop();
    let condition = expression[i - 1];
    while (stack.length && stack.pop() !== ":") {}

    let f = stack.pop();

    stack.push(condition === "T" ? t : f);

    i--;
  }
  return stack[0];
};
