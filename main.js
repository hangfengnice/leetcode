// number bigint string boolean null undefined
let array = [1, 1, '1', '1', true, true, new Boolean(false), new Boolean(false), null, null, undefined, undefined, new String('1'), new String('1'), /a/, /a/, NaN, NaN];

let arrfilter = array.filter((item, index, arr) => {
  return arr.indexOf(item) == index
})

console.log(arrfilter);
