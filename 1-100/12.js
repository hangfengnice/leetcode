var intToRoman = function (num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const valueSymbols = new Map();
  valueSymbols.set(1000, "M");
  valueSymbols.set(900, "CM");
  valueSymbols.set(500, "D");
  valueSymbols.set(400, "CD");
  valueSymbols.set(100, "C");
  valueSymbols.set(90, "XC");
  valueSymbols.set(50, "L");
  valueSymbols.set(40, "XL");
  valueSymbols.set(10, "X");
  valueSymbols.set(9, "IX");
  valueSymbols.set(5, "V");
  valueSymbols.set(4, "IV");
  valueSymbols.set(1, "I");

  const roman = [];
  for (const value of values) {
    const symbol = valueSymbols.get(value);
    while (num >= value) {
      num -= value;
      roman.push(symbol);
    }
    if (num === 0) {
      break;
    }
  }
  return roman.join("");
};
