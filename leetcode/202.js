var isHappy = function(n) {
  let map = new Map()
  map.set(n, true)
  let str = String(n).split('')

  while(true) {
    let number = str.reduce((prev, next) => prev + next * next, 0)

    if (number == 1) return true
    if (map.get(number)) break
    map.set(number, true)

    str = String(number).split('')

  }
  return false
};
let res = isHappy(19)
console.log(res);
