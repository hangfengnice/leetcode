function getNexts(b, m) {
  debugger
  let next = [-1];
  let k = -1;
  for (let i = 1; i < m; i++) {
    while (k != -1 && b[k + 1] != b[i]) {
      k = next[k];
    }
    if (b[k + 1] == b[i]) {
      k++;
    }

    next[i] = k;
  }
  return next;
}

let res = getNexts("ababacd", 7);

console.log(res, "res");
