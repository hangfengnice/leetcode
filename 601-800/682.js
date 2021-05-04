var calPoints = function (ops) {
  let stack = [];
  for (let op of ops) {
    let length = stack.length;
    if (op === "+") {
      stack.push(stack[length - 1] + stack[length - 2]);
    } else if (op === "D") {
      stack.push(stack[length - 1] * 2);
    } else if (op === "C") {
      stack.pop();
    } else {
      stack.push(+op);
    }
  }
  let ans = 0;
  for (let score of stack) {
    ans += score;
  }
  return ans;
};

let res = calPoints(["5", "2", "C", "D", "+"]);
console.log(res);
