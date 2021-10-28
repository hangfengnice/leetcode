var backspaceCompare = function (s, t) {
  return build(s) === build(t);

  function build(str) {
    let ret = [];
    for (let s of str) {
      if (s === "#") {
        if (ret.length) {
          ret.pop();
        }
      } else {
        ret.push(s);
      }
    }
    console.log(ret, "ret");
    return ret.join("");
  }
};

backspaceCompare("y#fo##f", "y#f#o##f");
