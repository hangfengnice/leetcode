var reverseParentheses = function (s) {
  const stack = [];
  let str = "";
  for (ch of s) {
    if (ch === "(") {
      stack.push(str);
      str = "";
    } else if (ch === ")") {
      let prev = stack.pop();
      str = prev + str.split("").reverse().join("");
    } else {
      str += ch;
    }
  }
  return str;
};

var reverseParentheses = function (s) {
  const n = s.length;
  const pair = new Array(n).fill(0);

  const stack = [];
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      let j = stack.pop();

      pair[i] = j;
      pair[j] = i;
    }
  }
  const sb = [];
  let index = 0,
    step = 1;
  while (index < n) {
    const char = s[index];
    if (char === "(" || char === ")") {
      index = pair[index];
      step = -step;
    } else {
      sb.push(char);
    }
    index += step;
  }
  return sb.join("");
};
