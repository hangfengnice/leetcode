var numSquares = function (n) {
  let queue = [n];
  let visited = {};

  let level = 0;
  while (queue.length) {
    level++;

    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let cur = queue.pop();

      for (let j = 1; j * j <= cur; j++) {
        let temp = cur - j * j;

        if (temp == 0) {
          return level;
        }

        if (!visited[temp]) {
          queue.unshift(temp);
          visited[temp] = true;
        }
      }
    }
  }
  return level;
};
