['7z', 'rar', 'zip', 'apz', 'ar', 'bz', 'car', 'dar', 'cpgz', 'f', 'ha', 'hbc', 'hbc2', 'hbe', 'hpk', 'hyp'].some(function (append) {
  let reg = new RegExp('\\.' + append + '$')
  console.log(reg.source, 'reg.source');
  return reg.test("吴航锋-前端-社招-杭州.7z")
})
