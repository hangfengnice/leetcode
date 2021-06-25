var openLock = function (deadends, target) {
  if (target === "0000") return 0;

  const dead = new Set(deadends);

  if (dead.has("0000")) return -1;

  let step = 0;

  const queue = [];
  queue.push("0000");

  const seen = new Set();
  seen.add("0000");

  while (queue.length) {
    step++;

    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const status = queue.shift();

      for (const nextStatus of iterator(status)) {
        if (!seen.has(nextStatus) && !dead.has(nextStatus)) {
          if (nextStatus === target) {
            return step;
          }
          queue.push(nextStatus);
          seen.add(nextStatus);
        }
      }
    }
  }

  return -1;

  function iterator(status) {
    const ret = [];
    const array = Array.from(status);

    for (let i = 0; i < 4; i++) {
      const num = array[i];
      array[i] = numPrev(num);
      ret.push(array.join(""));

      array[i] = numSucc(num);
      ret.push(array.join(""));

      array[i] = num;
    }
    return ret;
  }

  function numPrev(x) {
    return x === "0" ? "9" : parseInt(x) - 1 + "";
  }
  function numSucc(x) {
    return x === "9" ? "0" : parseInt(x) + 1 + "";
  }
};

let res = openLock(["8888"], "0009");

console.log(res, "res");
