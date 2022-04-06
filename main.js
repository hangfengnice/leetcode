// let obj = {
//   name: "1",
//   age: 18,
//   sex: "man",
// }; // =》 { sex: 'man' }

// function omit(source, keys) {
//   let data = [];
// for(let i=0;i<=keys.length;i++){
//   if(source.indexOf(keys[i]) != -1){
//     data.push(keys[i])
//   }
// }
// return data
// }

// let res = omit(obj, ["name", "age"]);
// console.log(res, 'res')

let arr = ['a',  'abc', false, null, undefined, 1, 0]
function filter(arr) {
  return arr.filter(Boolean)
    // let flaseArr = []
    // let trueArr = []
    // for(let i = 0; i<=arr.length;i++){

    //   if(arr[i] !== '' && arr[i] !== false && arr[i] !== 0){
    //     trueArr.push(arr[i])
    //   }else{
    //     flaseArr.push(arr[i])
    //   }
    // }
    // return trueArr
}

let res = filter(arr)

console.log(res, 'res')

