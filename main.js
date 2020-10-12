// let p = Promise.resolve(new Error('foo'))

// setTimeout(console.log, 0, p)


// setTimeout(console.log, 0, Promise.reject(Promise.resolve()));

let p1 = Promise.resolve(1)

p1.then('hello')
