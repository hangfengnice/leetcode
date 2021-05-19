var a = {
  [Symbol(2)]: 2,
}

Object.defineProperty(a, 'b', {
  enumerable: false,
})

let res1 = Reflect.ownKeys(a) // [Symbol(2), 'b']
let res2 = Object.keys(a)

console.log(res1, res2);
