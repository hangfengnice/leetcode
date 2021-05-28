var findTheDifference = function (s, t) {
  let count = new Array(26).fill(0);
  for (let ch of s) {
    count[ch.charCodeAt() - 97]++;
  }
  for (let ch of t) {
    let prop = ch.charCodeAt() - 97;
    count[prop]--;
    if (count[prop] < 0) {
      return ch;
    }
  }
};

var findTheDifference = function (s, t) {
  let stotal = 0,
    ttotal = 0;
  for (let ch of s) {
    stotal += ch.charCodeAt();
  }
  for (let ch of t) {
    ttotal += ch.charCodeAt();
  }

  return String.fromCodePoint(ttotal - stotals);
};

var findTheDifference = function (s, t) {
  let res = 0;
  for (let ch of s) {
    res ^= ch.charCodeAt();
  }
  for (let ch of t) {
    res ^= ch.charCodeAt();
  }

  return String.fromCodePoint(res);
};

let res = findTheDifference("abd", "abcd");
console.log(res, "res");
