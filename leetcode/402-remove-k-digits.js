var removeKdigits = function (num, k) {
  const stk = [];
  for (const digit of num) {
    while (stk.length > 0 && stk[stk.length - 1] > digit && k) {
      stk.pop();
      k--;
    }
    stk.push(digit);
  }
  for (; k > 0; k--) {
    stk.pop();
  }

  let ans = "";
  let isLeadingZero = true;
  for (const digit of stk) {
    if (isLeadingZero && digit == "0") {
      continue;
    }
    isLeadingZero = false;
    ans += digit;
  }
  return !ans ? "0" : ans;
};

let result = removeKdigits('1432219', 3)

console.log(result);
