class Person {

  static getP() {
    console.log(this.p, 'hello ');
    return this.p
  }
}

console.log(Person.getP());
