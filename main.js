let obj = {
  name: 'hf',
  age: 12,
  *[Symbol.iterator]() {
    let vals = Object.values(obj)

    while(vals.length) {
     let val = vals.pop()
      yield val
    }
  }
}

for(let val of obj) {
  console.log(val);
}
