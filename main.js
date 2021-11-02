let a = new Set()
let b = new Set()

b.add('b')

console.log(a, b);

a = b
b = new Set()

console.log(a, b);
