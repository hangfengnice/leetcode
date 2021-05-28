var findRepeatedDnaSequences = function (s) {
  let map = {};
  let res = [];
  let i = 0;
  while (i + 10 <= s.length) {
    let sequence = s.slice(i, i + 10);

    map[sequence] = map[sequence] + 1 || 1;
    if (map[sequence] == 2) {
      res.push(sequence);
    }
    i++;
  }
  return res;
};
