var numRabbits = function(answers) {
  let map = new Map(), res = 0
  for(let answer of answers) {
    if (!answer) {
      res ++
    } else if (!map.has(a)) {
      res += 1 + a
      map.set(a, a)

    } else {
      map.set(a, map.get(a) - 1)
      if (map.get(a) == 0) {
        map.delete(a)
      }
    }
  }
  return res
};
