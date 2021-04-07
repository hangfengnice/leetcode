var originalDigits = function (s) {
  let res = [];
  res[0] = match("z");
  res[2] = match("w");
  res[4] = match("u");
  res[6] = match("x");
  res[8] = match("g");
  res[3] = match("h") - res[8];
  res[1] = match("o") - res[0] - res[2] - res[4];
  res[5] = match("f") - res[4];
  res[7] = match("v") - res[5];
  res[9] = match("i") - res[5] - res[6] - res[8];

  return res.reduce((str, times, num) => str + String(num).repeat(times), "");

  function match(char) {
    s;
    return (s.match(new RegExp(char, "g")) || []).length;
  }
};
