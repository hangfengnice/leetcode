var checkRecord = function (s) {
  let regL = /L{3}/;
  let resL = regL.test(s);

  let regA = /A/g;
  let resA = (s.match(regA) || []).length;

  return !resL && resA <= 1;
};

let regL = /L{3}/;

console.log(regL.test("LL"));
