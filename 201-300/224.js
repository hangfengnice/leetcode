var calculate = function (s) {
  const ops = [1];
  let sign = 1;

  let ret = 0;
  const n = s.length;

  let i = 0;
  while (i < n) {
    if (s[i] === " ") {
      i++;
    } else if (s[i] === "+") {
      sign = ops[ops.length - 1];
      i++;
    } else if (s[i] === "-") {
      sign = -ops[ops.length - 1];
      i++;
    } else if (s[i] === "(") {
      ops.push(sign);
      i++;
    } else if (s[i] === ")") {
      ops.pop();
      i++;
    } else {
      let num = 0;
      while (i < n && !isNaN(Number(s[i])) && s[i] !== " ") {
        num = num * 10 + (s[i] - 0);
        i++;
      }
      ret += sign * num;
    }
  }
  return ret;
};

calculate("1+2+(3-(4+5))");
