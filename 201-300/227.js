var calculate = function (s) {
  let n = s.length;
  let sign = "+";
  let num = 0;
  let stack = [];
  for (let i = 0; i < n; i++) {
    if (!isNaN(Number(s[i])) && s[i] !== " ") {
      num = num * 10 + (s[i] - 0);
      i ++
    }

    if (isNaN(Number(s[i])) || s[i] === n - 1) {
      switch (sign) {
        case "+":
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          stack.push(stack.pop() * num);
          break;
        case "/":
          stack.push((stack.pop() / num) | 0);
          break;
      }
      sign = s[i];
      num = 0;
      i ++
    }
  }
  let res = 0;
  for (let s of stack) {
    res += s;
  }
  return res;
};
