var countOfAtoms = function (formula) {
  let i = 0;
  const n = formula.length;
  const stack = [new Map()];

  while (i < n) {
    const ch = formula[i];
    if (ch === "(") {
      i++;
      stack.unshift(new Map());
    } else if (ch === ")") {
      i++;
      const num = parseNum();
      const popMap = stack.shift();
      const topMap = stack[0];
      for (const [atom, v] of popMap.entries()) {
        topMap.set(atom, (topMap.get(atom) || 0) + v * num);
      }
    } else {
      const atom = parseAtom();
      const num = parseNum();
      const topMap = stack[0];
      topMap.set(atom, (topMap.get(atom) || 0) + num);
    }
  }
  let map = stack.pop();
  map = Array.from(map);

  map.sort();

  const sb = [];
  for (const [atom, count] of map) {
    sb.push(atom);
    if (count > 1) {
      sb.push(count);
    }
  }
  return sb.join("");

  function parseAtom() {
    const sb = [];

    sb.push(formula[i++]);
    while (i < n && formula[i] >= "a" && formula[i] <= "z") {
      sb.push(formula[i++]);
    }
    return sb.join("");
  }

  function parseNum() {
    if (i === n || Number.isNaN(Number(formula[i]))) {
      return 1;
    }
    let num = 0;
    while (i < n && !Number.isNaN(Number(formula[i]))) {
      num = formula[i ++] - 0 + num * 10;
    }
    return num;
  }
};

let res = countOfAtoms('Mg(OH)2')

console.log(res)
