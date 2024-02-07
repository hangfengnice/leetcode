// 第二版的代码
function objectFactory() {
  var obj = new Object()
  Constructor = [].shift.call(arguments)

  console.log(obj, 'obj')

  obj.__proto__ = Constructor.prototype

  var ret = Constructor.apply(obj, arguments)

  return typeof ret === 'object' ? ret : obj
}

function Otaku(age) {}

Otaku.prototype.sayHello = function () {
  console.log('hello')
}

var person = objectFactory(Otaku, 'Kevin', '18')
console.log(person)
person.sayHello() //???
