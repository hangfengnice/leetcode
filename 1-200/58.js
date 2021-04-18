var lengthOfLastWord = function(s) {
  let m = s.match(/([a-zA-Z]+)\s*$/)
  console.log(m, 'm');
  return m && m[1].length
};

var lengthOfLastWord = function(s) {
  let len = 0
  for(let i = s.length - 1; i >= 0; i --) {
    var char = s[i]
    if (char != ' ') {
      len ++
    } else if (!!len) {
      break
    }
  }
  return len
};

lengthOfLastWord("")
