// const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/
// console.log('class="some-class"'.match(attribute))  // 测试双引号
// console.log("class='some-class'".match(attribute))  // 测试单引号
// console.log('class=some-class'.match(attribute))  // 测试无引号
// console.log('disabled'.match(attribute))

let ncname = `[a-zA-Z_][\-\.0-9_a-zA-Z]*`
// console.log(ncname);
console.log(new RegExp(ncname).test('a.'));
