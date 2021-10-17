var diffWaysToCompute = function (expression) {
  if (/^\d+$/.test(expression)) {
    return [parseInt(expression)];
  }
  let res = [];
  for (let i = 0; i < expression.length; i++) {
    let c = expression[i];
    if (c === "-" || c === "*" || c === "+") {
      let left = diffWaysToCompute(expression.slice(0, i));
      let right = diffWaysToCompute(expression.slice(i + 1));
      for (let l of left) {
        for (let r of right) {
          if (c === "-") {
            res.push(l - r);
          } else if (c === "*") {
            res.push(l * r);
          } else if (c === "+") {
            res.push(l + r);
          }
        }
      }
    }
  }
  return res;
};
