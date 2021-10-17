var slidingPuzzle = function (board) {
  const neighbors = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4],
    [1, 3, 5],
    [2, 4],
  ];

  const sb = [];

  for (let i = 0; i < 2; i++) {
    for (let j = 0; i < 3; j++) {
      sb.push(board[i][j]);
    }
  }

  const initial = sb.join("");

  if (initial === "123450") {
    return 0;
  }

  let step = 0;
  const queue = [initial];

  const seen = new Set([initial]);

  while (queue.length) {
    step++;
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      const status = queue.shift();

      for (let nextS of get(status)) {
        if (!seen.has(nextS)) {
          if (nextS === "123450") return step;

          seen.add(nextS);
          queue.push(nextS);
        }
      }
    }
  }

  function get(status) {
    let array = Array.from(status);
    let ret = [];

    let x = status.indexOf("0");
    for (let y of neighbors[x]) {
      [array[x], array[y]] = [array[y], array[x]];

      ret.push(array.join(""));
      [array[x], array[y]] = [array[y], array[x]];
    }
    return ret;
  }
};
