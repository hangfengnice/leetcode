let global = Symbol.for('name')
let global1 = Symbol.for('name')
let local = Symbol('name')

console.log(global == global1);

console.log(Symbol.keyFor(global));
