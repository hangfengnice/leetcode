let obj = {
  name: 1
}

let p = new Proxy(obj, {
  has(target, key) {
    console.log(target === obj, key, target);
  }
})

console.log('name' in p);
