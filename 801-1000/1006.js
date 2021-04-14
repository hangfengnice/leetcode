var clumsy = function (N) {
  const stack = [N--];

  let index = 0;
  while (N > 0) {
    if (index % 4 == 0) {
      stack.push(stack.pop() * N);
    } else if (index % 4 == 1) {
      const cur = stack.pop();
      stack.push(cur > 0 ? Math.floor(cur / N) : Math.ceil(cur / N));
    } else if (index % 4 == 2) {
      stack.push(N);
    } else if (index % 4 == 3) {
      stack.push(-N);
    }
    index++;
    N--;
  }

  return stack.reduce((cur, next) => cur + next, 0);
};

let res = clumsy(10);

console.log(res);
