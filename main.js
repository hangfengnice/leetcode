let obj = {
  name: 1
}

let newObj = new Object(obj)

newObj.age = 2
console.log(newObj, obj);
