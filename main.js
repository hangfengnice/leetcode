
const person = {
  name: "Lydia Hallie",
  age: 21,
  *[Symbol.iterator]() {
    console.log(this, 'this');
    for(let x in this) {
      yield* this[x]
    }
  }
}

console.log([...person]);

