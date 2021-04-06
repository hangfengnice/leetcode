const dinner = {
  meal: 'tacos'
}

const handler = {
  get(target, prop) {
    console.log('intercepted');
    return target[prop]
  },
  set(target, prop, value) {
    let oldval = target[prop]

    if (oldval != value) {
      target[prop] = value
    }
  }
}

let p = new Proxy(dinner, handler)


console.log(p.meal);
p.meal = 1
// console.log(p.meal);

