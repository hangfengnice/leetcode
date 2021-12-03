function cloneDeep(target, map = new Map()) {

  if (typeof target !== 'object') return target

  if (map.get(target)) {
    return map.get(target)
  }
  const temp = Array.isArray(target) ? [] : {}

  map.set(target, temp)
  for(const key in target) {
    temp[key] =  cloneDeep(target[key], map)
  }
  return temp
}

// // let arr = [1, 2, 3, 4]

// // for(let key in arr) {
// //   console.log(key, 'key')
// // }


// let arrow = () => {console.log('yes')}

// let other = eval(arrow.toString())
// other()

// let s = Symbol('1')



// let o = Object(Symbol.prototype.valueOf.call(s))

// console.log(o, o === s, 'o')

// console.log(Object(s), s)

let obj = {
  name: 1
}

let obj1 = Object(obj)

console.log(obj1 === obj, 'obj')

let s = Symbol(1)


let s2 = Object(s)

console.log(s === s2)
