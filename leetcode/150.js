var evalRPN = function (tokens) {
  let arr = [];
  let index = 0;
  for (let char of tokens) {
    switch (char) {
      case "+":
        arr[index - 2] += arr[index - 1];
        index = index - 1;
        break;
      case "-":
        arr[index - 2] -= arr[index - 1];
        index = index - 1;
        break;
      case "*":
        arr[index - 2] *= arr[index - 1];
        index = index - 1;
        break;
      case "/":
        arr[index - 2] = ~~(arr[index - 2] / arr[index - 1]);
        index = index - 1;
        break;
      default:
        arr[index++] = +char;
    }
  }
  return arr[0];
};

let res = evalRPN(["2", "1", "+", "3", "*"])
console.log(res);

