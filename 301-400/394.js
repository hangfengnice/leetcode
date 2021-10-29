var decodeString = function (s) {
  let numStack = [];
  let strStack = [];
  let num = 0;
  let result = "";
  let reg = /\d/;

  for (let ch of s) {
    if (reg.test(ch)) {
      num = num * 10 + Number(ch);
    } else if (ch === "[") {
      numStack.push(num);
      num = 0;
      strStack.push(result);
      result = "";
    } else if (ch === "]") {
      let repeat = numStack.pop();
      result = strStack.pop() + result.repeat(repeat);
    } else {
      result += ch;
    }
  }
  return result;
};

// 另外一种 栈解
var decodeString = function (s) {
  let stack = [],
    reg = /\d/;
  for (let ch of s) {
    if (ch !== "]") {
      stack.push(ch);
      continue;
    }

    let cur = stack.pop();
    let str = "";

    while (cur !== "[") {
      str = cur + str;
      cur = stack.pop();
    }
    let num = "";
    cur = stack.pop();
    while (reg.test(cur)) {
      num = cur + num;
      cur = stack.pop();
    }

    stack.push(cur);
    stack.push(str.repeat(num));
  }
  return stack.join("");
};

// 递归
var decodeString = function (s) {
  let src = s;
  let ptr = 0;
  return getString();

  function getString() {
    if (ptr === src.length || src[ptr] === "]") {
      return "";
    }

    let cur = src[ptr];
    let repTime = 1;
    let ret = "";
    if (/\d/.test(cur)) {
      repTime = getDigits();
      ptr++;
      str = getString();
      ptr++;
      while (repTime--) ret += str;
    } else if (/\w/.test(cur)) {
      ret = cur;
    }
    return ret + getString();
  }

  function getDigits() {
    let ret = 0;
    while (ptr < src.length && /\d/.test(src[ptr])) {
      ret = src[ptr] - 0 + ret * 10;
    }
    return ret;
  }
};
